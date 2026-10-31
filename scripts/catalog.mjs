import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { cars } from "../data/cars.js";
import { machines } from "../data/machines.js";
import { aircraft } from "../data/aircraft.js";
import { vehicles } from "../data/vehicles.js";

const photoFolders = { equipment: "machines", aircraft: "aircraft", vehicle: "transport" };

export const root = fileURLToPath(new URL("../", import.meta.url));
export async function catalog() {
  const images = [
    ...JSON.parse(await readFile(resolve(root, "data/image-sources.json"), "utf8")),
    ...JSON.parse(await readFile(resolve(root, "data/machine-image-sources.json"), "utf8")),
    ...JSON.parse(await readFile(resolve(root, "data/aircraft-image-sources.json"), "utf8")),
    ...JSON.parse(await readFile(resolve(root, "data/vehicle-image-sources.json"), "utf8"))
  ];
  const published = [...vehicles, ...aircraft, ...machines, ...cars].map((car) => ({
    ...car,
    photos: images.filter((photo) => photo.modelId === car.id).map(({ modelId, filename, downloadUrl, originalSha256, ...photo }) => ({
      ...photo,
      ...(Object.hasOwn(photoFolders, car.appearance.change) ? { modifications: "원본 비율 유지 · 웹용 JPEG로 크기와 용량을 조정했어요." } : {}),
      src: `assets/${photoFolders[car.appearance.change] || "cars"}/${filename}`
    }))
  }));
  return { updatedAt: "2026-10-31", cars: published };
}
