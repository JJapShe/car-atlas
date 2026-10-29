import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";

const root = new URL("../", import.meta.url);
const manifest = JSON.parse(await readFile(new URL("manifest.webmanifest", root), "utf8"));
const base = "https://jjapshe.github.io/car-atlas/";
for (const key of ["id", "start_url", "scope"]) assert.equal(new URL(manifest[key], base).href, base);
assert.equal(manifest.display, "standalone");
assert(manifest.name && manifest.short_name && manifest.lang === "ko");
assert.equal(manifest.short_name, "탈것 아틀라스", "Installed app display name must match the rebrand");
for (const size of [192, 512]) {
  const icon = manifest.icons.find((entry) => entry.sizes === `${size}x${size}`);
  assert(icon && icon.type === "image/png");
  const bytes = await readFile(new URL(icon.src, root));
  assert.equal(bytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  assert.equal(bytes.readUInt32BE(16), size); assert.equal(bytes.readUInt32BE(20), size);
}
const script = await readFile(new URL("install.js", root), "utf8");
function fixture(standalone = false) {
  const nodes = new Map();
  for (const id of ["installPanel", "installButton", "installDialog", "installStatus", "installClose"]) {
    const listeners = {};
    nodes.set(`#${id}`, { hidden: false, disabled: false, open: false, listeners,
      addEventListener: (type, fn) => { listeners[type] = fn; },
      showModal() { this.open = true; },
      close() { if (this.open) { this.open = false; this.listeners.close?.(); } },
      focus() { this.focused = true; }
    });
  }
  const events = {};
  runInNewContext(script, {
    document: { querySelector: (selector) => nodes.get(selector) }, navigator: {},
    window: { matchMedia: () => ({ matches: standalone }), addEventListener: (type, fn) => { events[type] = fn; } }
  });
  return { nodes, events, button: nodes.get("#installButton"), help: nodes.get("#installDialog"), panel: nodes.get("#installPanel") };
}
const test = fixture();
await test.button.listeners.click(); assert(test.help.open, "Unsupported/early install must show guidance");
test.nodes.get("#installClose").listeners.click(); assert(!test.help.open && test.button.focused);
let prompts = 0;
test.events.beforeinstallprompt({ preventDefault() {}, prompt: async () => { prompts++; }, userChoice: Promise.resolve({ outcome: "dismissed" }) });
await test.button.listeners.click(); assert.equal(prompts, 1); assert(!test.button.disabled && !test.panel.hidden);
await test.button.listeners.click(); assert.equal(prompts, 1, "A consumed browser prompt must not be reused"); assert(test.help.open);
test.events.appinstalled(); assert(test.panel.hidden && !test.help.open);
const failure = fixture();
failure.events.beforeinstallprompt({ preventDefault() {}, prompt: async () => { throw new Error("Unavailable"); } });
await failure.button.listeners.click(); assert(failure.help.open && !failure.button.disabled);
assert(fixture(true).panel.hidden, "Installed standalone app should hide installation UI");
console.log("PASS: app manifest scope, PNG icons, install/dismiss/fallback/error/standalone behavior");
