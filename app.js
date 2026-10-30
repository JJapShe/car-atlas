const normalize = (value) => String(value ?? "").normalize("NFKC").toLocaleLowerCase("ko").replace(/\s+/g, "");
const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
export const bodyLabels = { sedan: "세단", suv: "SUV", construction: "중장비", special: "특수 중장비", rotorcraft: "회전익기", fixedwing: "고정익기", rail: "기차", water: "배", road: "버스·특수차", farm: "농기계", cycle: "자전거·오토바이", lighter: "기구·비행선", space: "우주 탈것" };
const categoryAliases = { suv: "에스유브이", special: "중장비", rotorcraft: "항공기", fixedwing: "항공기 비행기", rail: "철도 열차", water: "선박", road: "특수차", farm: "농업", cycle: "두 바퀴", lighter: "항공기", space: "우주" };

export function filterCars(cars, { query = "", body = "", brand = "", savedOnly = false, savedIds = [] } = {}) {
  const term = normalize(query);
  return cars.filter((car) => {
    // Combined menu labels should not make a search for buses also return police cars.
    const category = ["road", "cycle", "lighter"].includes(car.body) ? "" : bodyLabels[car.body];
    const matchesTerm = !term || term === normalize(bodyLabels[car.body]) || normalize([car.name, car.brand, car.englishName, ...car.aliases, category, categoryAliases[car.body]].join(" ")).includes(term);
    return (!body || car.body === body) && (!brand || car.brand === brand) && (!savedOnly || savedIds.includes(car.id)) && matchesTerm;
  });
}

export function readSaved(raw, cars) {
  try {
    const ids = JSON.parse(raw || "[]");
    return Array.isArray(ids) ? [...new Set(ids.filter((id) => typeof id === "string" && cars.some((car) => car.id === id)))] : [];
  } catch { return []; }
}

if (typeof document !== "undefined") init().catch(() => {
  document.querySelector("#carGrid").innerHTML = '<div class="empty-state"><h3>도감을 불러오지 못했어요.</h3><p>인터넷 연결을 확인하고 새로고침해 주세요.</p></div>';
  document.querySelector("#resultCount").textContent = "잠시 후 다시 만나요";
});

async function init() {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const response = await fetch("./data/catalog.json?v=20261030-world-1");
  if (!response.ok) throw new Error("Catalog unavailable");
  const { cars } = await response.json();
  const storageKey = "car-atlas-favorites-v1";
  const state = { query: "", body: "", brand: "", savedOnly: false, savedIds: [], selected: null, photoIndex: 0 };
  let returnFocus = null;
  let photoReturnFocus = null;
  let toastTimer;
  try { state.savedIds = readSaved(localStorage.getItem(storageKey), cars); } catch { /* Exploration works without storage. */ }
  const bodyName = (car) => bodyLabels[car.body];
  const categoryName = (car) => [car.brand, bodyName(car)].filter(Boolean).join(" · ");
  const photoName = (photo, index) => photo.viewLabel || (/rear/.test(photo.src) ? "뒤쪽 모습" : /front/.test(photo.src) ? "앞쪽 모습" : `다른 모습 ${index + 1}`);
  const credit = (photo) => `${escape(photo.credit)} · <a href="${escape(photo.licenseUrl)}" target="_blank" rel="noopener noreferrer">${escape(photo.license)}</a> · <a href="${escape(photo.sourcePage)}" target="_blank" rel="noopener noreferrer">사진 원본 ↗</a>${photo.modifications ? `<br>${escape(photo.modifications)}` : ""}`;

  function toast(message) {
    let node = $(".toast");
    if (!node) { node = document.createElement("p"); node.className = "toast"; node.setAttribute("role", "status"); document.body.append(node); }
    node.textContent = message;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.remove(), 2400);
  }
  function renderBrands() {
    const passengerCategory = ["sedan", "suv"].includes(state.body);
    $("#brandFilters").hidden = !passengerCategory;
    if (!passengerCategory) { state.brand = ""; $("#brandFilters").replaceChildren(); return; }
    const brands = [...new Set(cars.filter((car) => car.body === state.body).map((car) => car.brand))];
    if (!brands.includes(state.brand)) state.brand = "";
    $("#brandFilters").innerHTML = ["", ...brands].map((brand) => `<button class="brand-filter ${state.brand === brand ? "active" : ""}" type="button" data-brand="${escape(brand)}" aria-pressed="${state.brand === brand}">${escape(brand || "모든 브랜드")}</button>`).join("");
  }
  function renderCatalog() {
    const visible = filterCars(cars, state);
    const noFavorites = state.savedOnly && !state.savedIds.length;
    $("#carGrid").innerHTML = visible.length ? visible.map((car) => {
      const saved = state.savedIds.includes(car.id);
      return `<article class="car-card" style="--tile:${car.tile}"><button type="button" class="favorite-button" data-save="${car.id}" aria-label="${escape(car.name)} 좋아하는 친구" aria-pressed="${saved}">${saved ? "♥" : "♡"}</button><button type="button" class="car-open" data-car="${car.id}" aria-label="${escape(car.name)} 살펴보기"><span class="car-photo"><img src="${car.photos[0].src}" alt="${escape(car.name)} ${escape(photoName(car.photos[0], 0))}" loading="lazy" width="600" height="380"></span><span class="card-info"><span class="card-topline"><span>${escape(categoryName(car))}</span><span class="card-photo-count">사진 ${car.photos.length}장</span></span><span class="card-name">${escape(car.name)}<span class="card-arrow" aria-hidden="true">↗</span></span><span class="card-cue">${escape(car.cardCue)}</span></span></button></article>`;
    }).join("") : `<div class="empty-state"><h3>${noFavorites ? "좋아하는 친구를 담아볼까요?" : "이 조건의 친구는 아직 없어요."}</h3><p>${noFavorites ? "친구 사진의 하트를 눌러보세요." : "이름이나 고른 조건을 바꿔보세요."}</p><button type="button" data-reset>모든 친구 보기 →</button></div>`;
    $("#resultCount").textContent = `${visible.length}가지 친구들${state.savedOnly ? " · 좋아하는 친구" : ""}`;
    $("#savedCount").textContent = state.savedIds.length;
    for (const [id, active] of [["allNav", !state.savedOnly], ["savedNav", state.savedOnly]]) {
      $("#" + id).setAttribute("aria-pressed", String(active)); $("#" + id).classList.toggle("active", active);
    }
    $$("[data-body]").forEach((button) => { button.hidden = !!button.dataset.body && !cars.some((car) => car.body === button.dataset.body); const active = button.dataset.body === state.body; button.classList.toggle("active", active); button.setAttribute("aria-pressed", String(active)); });
  }
  function toggleSaved(id) {
    state.savedIds = state.savedIds.includes(id) ? state.savedIds.filter((saved) => saved !== id) : [...state.savedIds, id];
    try { localStorage.setItem(storageKey, JSON.stringify(state.savedIds)); }
    catch { toast("이번에 보는 동안만 하트가 남아요."); }
    renderCatalog(); updateDetailSave();
  }
  function updateDetailSave() {
    const button = $("#detailSave");
    if (!button || !state.selected) return;
    const saved = state.savedIds.includes(state.selected.id);
    button.setAttribute("aria-pressed", String(saved)); button.textContent = saved ? "♥ 담았어요" : "♡ 좋아해요";
  }
  function showCar(id, updateUrl = true) {
    const car = cars.find((item) => item.id === id);
    if (!car) return;
    if (!$("#detailDialog").open) returnFocus = document.activeElement;
    if ($("#imageDialog").open) $("#imageDialog").close();
    state.selected = car;
    const equipment = car.appearance.change === "equipment";
    const aircraft = car.appearance.change === "aircraft";
    const vehicle = car.appearance.change === "vehicle";
    const nonPassenger = equipment || aircraft || vehicle;
    const reference = nonPassenger
      ? `<p>소개 기준: ${escape(car.appearance.label)}<br>자료 확인 ${escape(car.checkedAt)}</p>`
      : `<p>외형 기준: ${escape(car.appearance.label)}<br>구분: ${escape({ fullchange: "풀체인지", facelift: "페이스리프트", initial: "첫 양산 외형", verified: "공식 현행 외형" }[car.appearance.change])} · 자료 확인 ${escape(car.checkedAt)}</p>`;
    const sourceNote = vehicle
      ? "탈것과 기계의 종류와 하는 일을 소개해요. 사진은 실제 예시이며 같은 종류도 모델·지역·도장·장착 도구가 다를 수 있어요."
      : aircraft
      ? "항공기는 종류와 하는 일을 소개해요. 사진은 실제 기체 예시이며 같은 기종도 세부 형식과 도장, 장착품이 다를 수 있어요. 오토자이로는 공기의 흐름으로 윗날개가 도는 회전익기이며 헬리콥터와 달라요."
      : equipment
      ? "장비는 종류와 하는 일을 소개해요. 사진은 같은 종류의 여러 실물 장비 예시이며 최신 모델이라는 뜻은 아니에요. ‘특수 중장비’는 찾아보기 위한 묶음이며 법적 분류가 아니에요."
      : "사진은 해당 외형의 실물 예시예요. 해외차에는 이전 세대 예시도 포함해요. 국내 최신 판매형이나 모든 옵션·바퀴·색상과 같다는 뜻은 아니에요.";
    $("#detailContent").innerHTML = `<div class="detail-cover" style="--tile:${car.tile}"><button type="button" data-photo="0" aria-label="${escape(car.name)} 사진 크게 보기"><img src="${car.photos[0].src}" alt="${escape(car.name)} ${escape(photoName(car.photos[0], 0))}"></button>${nonPassenger ? `<p class="cover-label">${escape(photoName(car.photos[0], 0))}</p>` : ""}</div><div class="detail-body"><div class="detail-heading"><div><p class="eyebrow">${escape(categoryName(car))}</p><h2 id="detailTitle">${escape(car.name)}</h2></div><div class="detail-actions"><button id="speakName" type="button">♫ 이름 듣기</button><button id="detailSave" type="button" data-save="${car.id}" aria-pressed="false"></button></div></div><p class="detail-summary">${escape(car.summary)}</p><ul class="cue-list">${car.cues.map((cue, index) => `<li><span>관찰 ${String(index + 1).padStart(2, "0")}</span>${escape(cue)}</li>`).join("")}</ul><h3 class="gallery-heading">${car.photos.length > 1 ? "다른 모습도 살펴봐요" : "크게 살펴봐요"}</h3><div class="gallery-grid">${car.photos.map((photo, index) => `<button class="gallery-thumbnail" type="button" data-photo="${index}" aria-label="${escape(car.name)} ${escape(photoName(photo, index))} 크게 보기"><img src="${photo.src}" alt="${escape(car.name)} ${escape(photoName(photo, index))}" loading="lazy"><span>${escape(photoName(photo, index))} ↗</span></button>`).join("")}</div><details class="parent-info"><summary>보호자용 자료와 사진 출처</summary>${reference}<p><a href="${escape(car.sourceUrl)}" target="_blank" rel="noopener noreferrer">${vehicle ? "탈것의 하는 일 자료" : aircraft ? "항공기의 하는 일 자료" : equipment ? "장비의 하는 일 자료" : "공식 자동차 자료"} ↗</a></p><p>${sourceNote}</p><ul>${car.photos.map((photo, index) => `<li>${escape(photoName(photo, index))}: ${credit(photo)}<br>사진의 외형: ${escape(photo.appearanceLabel)}</li>`).join("")}</ul></details></div>`;
    updateDetailSave();
    if (!$("#detailDialog").open) $("#detailDialog").showModal();
    $("#detailDialog").scrollTop = 0;
    $("#speakName").hidden = !("speechSynthesis" in window);
    if (updateUrl && location.hash !== `#car=${id}`) history.pushState(null, "", `#car=${id}`);
  }
  function showPhoto(index) {
    if (!state.selected || !state.selected.photos[index]) return;
    photoReturnFocus = document.activeElement;
    state.photoIndex = index; renderPhoto();
    if (!$("#imageDialog").open) $("#imageDialog").showModal();
  }
  function renderPhoto() {
    const car = state.selected, photo = car.photos[state.photoIndex];
    $("#imageTitle").textContent = `${car.name} · ${photoName(photo, state.photoIndex)}`;
    $("#largeImage").src = photo.src; $("#largeImage").alt = `${car.name} ${photoName(photo, state.photoIndex)}`;
    $("#imageCaption").innerHTML = `${state.photoIndex + 1} / ${car.photos.length} · ${credit(photo)}`;
    $("#prevImage").disabled = $("#nextImage").disabled = car.photos.length < 2;
  }
  function movePhoto(direction) {
    state.photoIndex = (state.photoIndex + direction + state.selected.photos.length) % state.selected.photos.length;
    renderPhoto();
  }
  function syncHash() {
    const id = new URLSearchParams(location.hash.slice(1)).get("car");
    if (cars.some((car) => car.id === id)) { if (!$("#detailDialog").open || state.selected?.id !== id) showCar(id, false); }
    else { if ($("#imageDialog").open) $("#imageDialog").close(); if ($("#detailDialog").open) $("#detailDialog").close(); }
  }
  function reset() {
    Object.assign(state, { query: "", body: "", brand: "", savedOnly: false });
    $("#searchInput").value = ""; renderBrands(); renderCatalog();
  }
  document.addEventListener("click", (event) => {
    const button = event.target.closest("button"); if (!button) return;
    if (button.dataset.car) showCar(button.dataset.car);
    if (button.dataset.save) {
      const inDetail = button.id === "detailSave", id = button.dataset.save;
      toggleSaved(id); if (!inDetail) document.querySelector(`[data-save="${id}"]`)?.focus();
    }
    if (button.dataset.body !== undefined) { state.body = button.dataset.body; renderBrands(); renderCatalog(); }
    if (button.dataset.brand !== undefined) { state.brand = button.dataset.brand; renderBrands(); renderCatalog(); document.querySelector(`[data-brand="${state.brand}"]`)?.focus(); }
    if (button.dataset.photo !== undefined) showPhoto(Number(button.dataset.photo));
    if (button.dataset.close) $("#" + button.dataset.close).close();
    if (button.hasAttribute("data-reset")) reset();
    if (button.id === "speakName" && "speechSynthesis" in window) {
      speechSynthesis.cancel(); const car = state.selected;
      const spokenName = /[A-Z]/.test(car.name) ? car.aliases[0] || car.name : car.name;
      const speech = new SpeechSynthesisUtterance([car.brand, spokenName].filter(Boolean).join(", ")); speech.lang = "ko-KR"; speech.rate = .82; speechSynthesis.speak(speech);
    }
  });
  $("#searchInput").addEventListener("input", (event) => { state.query = event.target.value; renderCatalog(); });
  $("#savedNav").addEventListener("click", () => { state.savedOnly = !state.savedOnly; renderCatalog(); $("#catalog").scrollIntoView({ behavior: "instant" }); });
  $("#allNav").addEventListener("click", () => { state.savedOnly = false; renderCatalog(); $("#catalog").scrollIntoView({ behavior: "instant" }); });
  $("#aboutButton").addEventListener("click", () => $("#aboutDialog").showModal());
  $("#prevImage").addEventListener("click", () => movePhoto(-1));
  $("#nextImage").addEventListener("click", () => movePhoto(1));
  $("#detailDialog").addEventListener("close", () => {
    if ($("#imageDialog").open) $("#imageDialog").close();
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    if (location.hash.startsWith("#car=")) history.replaceState(null, "", location.pathname + location.search);
    const focusTarget = returnFocus?.isConnected ? returnFocus : document.querySelector(`[data-car="${state.selected?.id}"]`);
    focusTarget?.focus();
  });
  $("#imageDialog").addEventListener("close", () => photoReturnFocus?.isConnected && photoReturnFocus.focus());
  document.addEventListener("keydown", (event) => {
    if (!$("#imageDialog").open) return;
    if (event.key === "ArrowRight") { event.preventDefault(); movePhoto(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); movePhoto(-1); }
  });
  document.addEventListener("error", (event) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    const image = event.target;
    if (image.dataset.failed) return;
    image.dataset.failed = "true"; image.alt += " · 사진을 불러오지 못했어요";
    image.style.objectFit = "contain"; image.src = "./assets/icon.svg";
  }, true);
  addEventListener("popstate", syncHash); addEventListener("hashchange", syncHash);
  const featured = cars.find((car) => car.id === "robinson-r44") || cars.find((car) => car.id === "walking-excavator") || cars[0];
  $("#heroCount").textContent = cars.length;
  $("#heroImage").src = featured.photos[0].src; $("#heroImage").alt = `${featured.name} ${photoName(featured.photos[0], 0)}`;
  $("#heroBrand").textContent = categoryName(featured); $("#heroCarName").textContent = featured.name;
  $("#heroOpen").setAttribute("aria-label", `${featured.name} 살펴보기`); $("#heroOpen").addEventListener("click", () => showCar(featured.id));
  renderBrands(); renderCatalog(); syncHash();
}
