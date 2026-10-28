import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { root } from "./catalog.mjs";

const site = resolve(root, "dist"), port = 8042;
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".webmanifest": "application/manifest+json; charset=utf-8", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };
await stat(resolve(site, "index.html"));
const server = createServer(async (request, response) => {
  try {
    if (!["GET", "HEAD"].includes(request.method)) { response.writeHead(405); response.end(); return; }
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const file = resolve(site, "." + (pathname === "/" ? "/index.html" : pathname));
    if (!file.startsWith(site + sep)) { response.writeHead(403); response.end(); return; }
    const bytes = await readFile(file);
    response.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream", "Cache-Control": "no-cache", "X-Content-Type-Options": "nosniff", "Content-Length": bytes.length });
    response.end(request.method === "HEAD" ? undefined : bytes);
  } catch { response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); response.end("Not found"); }
});
server.on("error", (error) => { console.error(error.code === "EADDRINUSE" ? `Port ${port} is in use. Close the old Car Atlas preview and try again.` : error.message); process.exitCode = 1; });
server.listen(port, "127.0.0.1", () => console.log(`Car Atlas: http://127.0.0.1:${port}`));
