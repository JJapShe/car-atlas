import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { cars } from "../data/cars.js";
import { machines } from "../data/machines.js";
import { aircraft } from "../data/aircraft.js";
import { vehicles } from "../data/vehicles.js";

const photoFolders = { equipment: "machines", aircraft: "aircraft", vehicle: "transport" };

export function validateIllustration(image, bytes) {
  assert.equal(image.kind, "illustration");
  assert.equal(image.review?.status, "approved", `Unreviewed AI image: ${image.filename}`);
  assert.equal(image.review.parent, "pass");
  assert.equal(image.review.independent, "pass");
  assert(image.review.independentReviewer && /^[a-f0-9]{64}$/.test(image.originalSha256));
  assert(image.review.reviewedAt && image.review.referenceUrls?.length && image.generation?.prompt);
  assert(image.review.referenceUrls.every((url) => url.startsWith("https://")));
  assert.equal(image.review.originalSha256, image.originalSha256);
  assert.equal(image.review.sha256, image.sha256, "AI review belongs to different image bytes");
  assert.equal(createHash("sha256").update(bytes).digest("hex"), image.review.sha256, "AI image changed after visual review");
}

export const root = fileURLToPath(new URL("../", import.meta.url));
export async function catalog() {
  const images = [
    ...JSON.parse(await readFile(resolve(root, "data/image-sources.json"), "utf8")),
    ...JSON.parse(await readFile(resolve(root, "data/machine-image-sources.json"), "utf8")),
    ...JSON.parse(await readFile(resolve(root, "data/aircraft-image-sources.json"), "utf8")),
    ...JSON.parse(await readFile(resolve(root, "data/vehicle-image-sources.json"), "utf8"))
  ];
  const illustrations = JSON.parse(await readFile(resolve(root, "data/generated-image-sources.json"), "utf8"));
  for (const image of illustrations) {
    assert(/^[a-z0-9-]+\.jpg$/.test(image.filename));
    validateIllustration(image, await readFile(resolve(root, "assets/illustrations", image.filename)));
  }
  const published = [...vehicles, ...aircraft, ...machines, ...cars].map((car) => ({
    ...car,
    photos: [...images.filter((photo) => photo.modelId === car.id).map(({ modelId, filename, downloadUrl, originalSha256, ...photo }) => ({
      ...photo,
      ...(Object.hasOwn(photoFolders, car.appearance.change) ? { modifications: "원본 비율 유지 · 웹용 JPEG로 크기와 용량을 조정했어요." } : {}),
      src: `assets/${photoFolders[car.appearance.change] || "cars"}/${filename}`
    })), ...illustrations.filter((image) => image.modelId === car.id).map((image) => ({
      kind: "illustration", src: `assets/illustrations/${image.filename}`,
      viewLabel: image.viewLabel, caption: image.caption, appearanceLabel: image.appearanceLabel,
      credit: image.credit, sha256: image.sha256, width: image.width, height: image.height,
      reviewedAt: image.review.reviewedAt,
      reviewNote: "실물 자료와 주요 구조를 대조해 검수한 보조 그림이에요. 실물 사진이나 특정 판매 모델의 모습은 아니에요."
    }))]
  }));
  return { updatedAt: "2026-11-01", cars: published };
}
