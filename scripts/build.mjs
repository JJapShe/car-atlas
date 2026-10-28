import assert from "node:assert/strict";
import { readFile, copyFile, mkdir, readdir, rm, lstat, realpath, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { catalog, root } from "./catalog.mjs";

const data = await catalog();
assert(data.cars.length, "No photographed cars");
assert(data.cars.every((car) => car.photos.length), "Every selected car and machine needs a registered photograph");
const site = resolve(root, "dist");
const existing = await lstat(site).catch((error) => { if (error.code !== "ENOENT") throw error; });
assert.equal(dirname(site), resolve(root));
if (existing) {
  assert(existing.isDirectory() && !existing.isSymbolicLink(), "Refusing to clean linked dist");
  assert.equal(await realpath(site), resolve(await realpath(root), "dist"));
  await rm(site, { recursive: true });
}
const files = ["index.html", "app.js", "styles.css", "assets/icon.svg", ...new Set(data.cars.flatMap((car) => car.photos.map((photo) => photo.src)))];
for (const file of files) {
  assert(!file.includes("..") && !file.includes("\\"), `Unsafe file: ${file}`);
  const from = resolve(root, file), to = resolve(site, file);
  assert(!(await lstat(from)).isSymbolicLink(), `Linked asset: ${file}`);
  await mkdir(dirname(to), { recursive: true }); await copyFile(from, to);
  assert((await readFile(from)).equals(await readFile(to)), `Copy mismatch: ${file}`);
}
await mkdir(resolve(site, "data"), { recursive: true });
await writeFile(resolve(site, "data/catalog.json"), JSON.stringify(data));
const publicFiles = (await readdir(site, { recursive: true, withFileTypes: true })).filter((entry) => entry.isFile()).length;
assert.equal(publicFiles, files.length + 1);
const text = JSON.stringify(data);
assert(!/\.codex|file:\/\/|C:[\\/]|work\//.test(text), "Private path in catalog");
console.log(`PASS: built ${data.cars.length} cars, ${data.cars.reduce((n, car) => n + car.photos.length, 0)} photos, ${publicFiles} public files`);
