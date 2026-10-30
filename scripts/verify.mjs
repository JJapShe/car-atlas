import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { resolve } from "node:path";
import { catalog, root } from "./catalog.mjs";
import { filterCars, readSaved, bodyLabels } from "../app.js";
import { cars as sourceCars } from "../data/cars.js";
import { machines } from "../data/machines.js";
import { aircraft } from "../data/aircraft.js";
import { vehicles } from "../data/vehicles.js";
import "./verify-install.mjs";

const { cars } = await catalog();
assert(cars.length > 0, "No published cars");
assert.equal(sourceCars.length, 16, "Preserve the 16 original passenger models");
assert.equal(cars.length, sourceCars.length + machines.length + aircraft.length + vehicles.length, "Catalog must contain every selected vehicle");
const sourceImages = [
  ...JSON.parse(await readFile(resolve(root, "data/image-sources.json"), "utf8")),
  ...JSON.parse(await readFile(resolve(root, "data/machine-image-sources.json"), "utf8")),
  ...JSON.parse(await readFile(resolve(root, "data/aircraft-image-sources.json"), "utf8")),
  ...JSON.parse(await readFile(resolve(root, "data/vehicle-image-sources.json"), "utf8"))
];
assert(sourceImages.every((photo) => cars.some((car) => car.id === photo.modelId)), "Photo without a car record");
assert.equal(new Set(sourceImages.map((photo) => photo.originalSha256)).size, sourceImages.length, "Repeated source image is not an additional view");
assert.equal(new Set(cars.map((car) => car.id)).size, cars.length, "Duplicate car ID");
const photos = new Map();
for (const car of cars) {
  assert(/^[a-z0-9-]+$/.test(car.id));
  assert(Object.hasOwn(bodyLabels, car.body));
  assert(["fullchange", "facelift", "initial", "verified", "equipment", "aircraft", "vehicle"].includes(car.appearance.change));
  assert.equal(car.appearance.change === "equipment", ["construction", "special"].includes(car.body), `Incorrect type/appearance distinction: ${car.id}`);
  assert.equal(car.appearance.change === "aircraft", ["rotorcraft", "fixedwing"].includes(car.body), `Incorrect aircraft type: ${car.id}`);
  assert.equal(car.appearance.change === "vehicle", ["rail", "water", "road", "farm", "cycle", "lighter", "space"].includes(car.body), `Incorrect vehicle type: ${car.id}`);
  assert(car.sourceUrl.startsWith("https://") && car.appearance.label && car.checkedAt);
  assert(car.cues.length >= 1 && car.cues.length <= 2);
  assert(car.summary.length < 90 && car.cues.every((cue) => cue.length < 70), `Long child copy: ${car.id}`);
  assert(car.photos.length >= 1, `Missing photograph: ${car.id}`);
  for (const photo of car.photos) {
    assert(/^assets\/(cars|machines|aircraft|transport)\/[a-z0-9-]+\.(jpg|png|webp)$/.test(photo.src));
    if (["equipment", "aircraft", "vehicle"].includes(car.appearance.change)) assert(photo.viewLabel, `Missing view label: ${photo.src}`);
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
  { id: "d", name: "TBM 터널 굴착기", englishName: "Tunnel Boring Machine", aliases: ["티비엠"], body: "special" },
  { id: "e", name: "작은 헬리콥터 R44", englishName: "Robinson R44", aliases: ["헬기"], body: "rotorcraft" },
  { id: "f", name: "글라이더", englishName: "Glider", aliases: [], body: "fixedwing" }
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
assert.deepEqual(filterCars(fixture, { query: "항공기" }).map((car) => car.id), ["e", "f"]);
assert.deepEqual(filterCars(fixture, { query: "비행기", body: "fixedwing" }).map((car) => car.id), ["f"]);
assert.deepEqual(filterCars(fixture, { query: "헬기", body: "rotorcraft" }).map((car) => car.id), ["e"]);
assert.deepEqual(filterCars(fixture, { query: "글라이더", body: "rotorcraft" }), []);
assert.deepEqual(readSaved('["a","e","f","e","removed"]', fixture), ["a", "e", "f"]);
const serviceFixture = [
  { id: "bus", name: "시내버스", body: "road", aliases: [] },
  { id: "police", name: "경찰차", body: "road", aliases: [] },
  { id: "bicycle", name: "접이식 자전거", body: "cycle", aliases: [] },
  { id: "scooter", name: "스쿠터", body: "cycle", aliases: ["오토바이"] },
  { id: "train", name: "지하철", body: "rail", aliases: [] },
  { id: "ship", name: "여객선", body: "water", aliases: [] }
];
assert.deepEqual(filterCars(serviceFixture, { query: "버스" }).map((car) => car.id), ["bus"]);
assert.deepEqual(filterCars(serviceFixture, { query: "자전거" }).map((car) => car.id), ["bicycle"]);
assert.deepEqual(filterCars(serviceFixture, { query: "오토바이" }).map((car) => car.id), ["scooter"]);
assert.deepEqual(filterCars(serviceFixture, { query: "열차" }).map((car) => car.id), ["train"]);
assert.deepEqual(filterCars(serviceFixture, { query: "선박" }).map((car) => car.id), ["ship"]);
assert.deepEqual(readSaved('["bus","ship","train","bicycle","missing"]', serviceFixture), ["bus", "ship", "train", "bicycle"]);
for (const body of ["construction", "special"]) assert.equal(filterCars(cars, { body }).length, [...machines, ...vehicles].filter((car) => car.body === body).length);

assert.deepEqual(filterCars(cars, { query: "거미 굴착기", body: "special" }).map((car) => car.id), ["walking-excavator"]);
assert.equal(filterCars(cars, { body: "rotorcraft" }).length, 6);
assert.equal(filterCars(cars, { body: "fixedwing" }).length, 6);
assert(aircraft.every((entry) => cars.find((car) => car.id === entry.id).photos.length >= 2), "Aircraft gallery needs two distinct photographs");
console.log(`PASS: ${cars.length} cars, ${photos.size} licensed photos, hashes, child copy, combined filters and saved-data recovery`);
