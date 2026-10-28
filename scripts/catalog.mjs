import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { cars } from "../data/cars.js";

export const root = fileURLToPath(new URL("../", import.meta.url));
export async function catalog() {
  const images = JSON.parse(await readFile(resolve(root, "data/image-sources.json"), "utf8"));
  const published = cars.map((car) => ({
    ...car,
    photos: images.filter((photo) => photo.modelId === car.id).map(({ modelId, filename, downloadUrl, originalSha256, ...photo }) => ({ ...photo, src: `assets/cars/${filename}` }))
  }));
  return { updatedAt: "2026-10-28", cars: published };
}
