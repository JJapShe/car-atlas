import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { resolve } from "node:path";
import { catalog, root } from "./catalog.mjs";
import { filterCars, readSaved, bodyLabels } from "../app.js";
import { cars as sourceCars } from "../data/cars.js";
import { machines } from "../data/machines.js";

const { cars } = await catalog();
assert(cars.length > 0, "No published cars");
assert.equal(sourceCars.length, 16, "Preserve the 16 original passenger models");
assert.equal(cars.length, sourceCars.length + machines.length, "Catalog must contain every selected car and machine");
const sourceImages = [
  ...JSON.parse(await readFile(resolve(root, "data/image-sources.json"), "utf8")),
  ...JSON.parse(await readFile(resolve(root, "data/machine-image-sources.json"), "utf8"))
];
assert(sourceImages.every((photo) => cars.some((car) => car.id === photo.modelId)), "Photo without a car record");
assert.equal(new Set(cars.map((car) => car.id)).size, cars.length, "Duplicate car ID");
const photos = new Map();
for (const car of cars) {
  assert(/^[a-z0-9-]+$/.test(car.id));
  assert(Object.hasOwn(bodyLabels, car.body));
  assert(["fullchange", "facelift", "initial", "verified", "equipment"].includes(car.appearance.change));
  assert.equal(car.appearance.change === "equipment", ["construction", "special"].includes(car.body), `Incorrect type/appearance distinction: ${car.id}`);
  assert(car.sourceUrl.startsWith("https://") && car.appearance.label && car.checkedAt);
  assert(car.cues.length >= 1 && car.cues.length <= 2);
  assert(car.summary.length < 90 && car.cues.every((cue) => cue.length < 70), `Long child copy: ${car.id}`);
  assert(car.photos.length >= 1, `Missing photograph: ${car.id}`);
  for (const photo of car.photos) {
    assert(/^assets\/(cars|machines)\/[a-z0-9-]+\.(jpg|png|webp)$/.test(photo.src));
    if (car.appearance.change === "equipment") assert(photo.viewLabel, `Missing equipment view label: ${photo.src}`);
    assert(photo.credit && photo.appearanceLabel && photo.width > 100 && photo.height > 100);
    assert([photo.sourcePage, photo.licenseUrl].every((url) => url.startsWith("https://")));
    assert(/CC0|CC BY|Public domain/.test(photo.license), `Unresolved photo license: ${photo.src}`);
    const bytes = await readFile(resolve(root, photo.src));
    assert(bytes.length > 1000, `Invalid image bytes: ${photo.src}`);
    assert.equal(createHash("sha256").update(bytes).digest("hex"), photo.sha256, `Changed image: ${photo.src}`);
    photos.set(photo.src, photo);
  }
}
const fixture = [
  { id: "a", name: "아이오닉 6", brand: "현대", englishName: "Ioniq 6", aliases: [], body: "sedan" },
  { id: "b", name: "EV3", brand: "기아", englishName: "EV3", aliases: ["이브이쓰리"], body: "suv" },
  { id: "c", name: "굴착기", englishName: "Excavator", aliases: ["포클레인"], body: "construction" },
  { id: "d", name: "TBM 터널 굴착기", englishName: "Tunnel Boring Machine", aliases: ["티비엠"], body: "special" }
];
assert.deepEqual(filterCars(fixture, { query: " ＩＯＮＩＱ６ " }).map((car) => car.id), ["a"]);
assert.deepEqual(filterCars(fixture, { query: "이브이 쓰리", body: "suv", brand: "기아", savedOnly: true, savedIds: ["b"] }).map((car) => car.id), ["b"]);
assert.equal(filterCars(fixture, { query: "EV3", body: "sedan" }).length, 0);
assert.equal(filterCars(fixture, { savedOnly: true, savedIds: [] }).length, 0);
assert.deepEqual(readSaved('["b","b","missing",2]', fixture), ["b"]);
assert.deepEqual(readSaved('{broken', fixture), []);
assert.deepEqual(readSaved('{"b":true}', fixture), []);
assert.deepEqual(filterCars(fixture, { query: "포클레인", body: "construction" }).map((car) => car.id), ["c"]);
assert.deepEqual(filterCars(fixture, { query: "ｔｂｍ", body: "special" }).map((car) => car.id), ["d"]);
assert.deepEqual(filterCars(fixture, { query: "세단" }).map((car) => car.id), ["a"]);
assert.deepEqual(filterCars(fixture, { query: "중장비" }).map((car) => car.id), ["c", "d"]);
assert.deepEqual(readSaved('["a","c","c","removed"]', fixture), ["a", "c"]);
assert.equal(filterCars(cars, { body: "construction" }).length, 10);
assert.equal(filterCars(cars, { body: "special" }).length, 8);
console.log(`PASS: ${cars.length} cars, ${photos.size} licensed photos, hashes, child copy, combined filters and saved-data recovery`);
