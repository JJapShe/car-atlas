// Real examples, with photographed exterior and market recorded for passenger cars.
export const vehicles = [
  {
    "id": "tesla-model-3",
    "name": "모델 3",
    "englishName": "Model 3",
    "brand": "테슬라",
    "body": "sedan",
    "aliases": [
      "테슬라 모델3",
      "모델쓰리"
    ],
    "cardCue": "가늘고 긴 앞등을 찾아봐요.",
    "summary": "낮고 매끈한 모습의 전기 세단이에요.",
    "cues": [
      "앞쪽에 길고 가느다란 불빛이 있어요.",
      "뒤쪽 불빛은 양쪽에서 C처럼 꺾여 있어요."
    ],
    "appearance": {
      "label": "모델 3 퍼포먼스 · 2024 부분변경 외형",
      "change": "facelift"
    },
    "sourceUrl": "https://www.tesla.com/en_gb/blog/introducing-new-model-3-performance",
    "tile": "#e7ebed",
    "checkedAt": "2026-10-30"
  },
  {
    "id": "tesla-model-y",
    "name": "모델 Y",
    "englishName": "Model Y",
    "brand": "테슬라",
    "body": "suv",
    "aliases": [
      "테슬라 모델와이",
      "모델와이"
    ],
    "cardCue": "앞쪽의 긴 불빛을 찾아봐요.",
    "summary": "둥글고 매끈한 몸을 가진 전기 SUV예요.",
    "cues": [
      "앞쪽 불빛이 가로로 길게 이어져요.",
      "뒤쪽 지붕이 부드럽게 낮아져요."
    ],
    "appearance": {
      "label": "모델 Y · 2025 부분변경 외형",
      "change": "facelift"
    },
    "sourceUrl": "https://www.tesla.com/learn/introducing-new-model-y",
    "tile": "#e7ebed",
    "checkedAt": "2026-10-30"
  },
  {
    "id": "korean-ktx",
    "name": "한국 고속열차 KTX 산천",
    "englishName": "KTX-Sancheon",
    "aliases": [
      "KTX",
      "케이티엑스 산천",
      "산천 고속열차"
    ],
    "cardCue": "뾰족한 앞모습으로 빠르게 달려요.",
    "summary": "KTX 산천은 한국의 고속열차예요. 여러 객차를 이어 서울과 여러 도시 사이를 달려요.",
    "cues": [
      "앞부분이 뾰족하고 길어요.",
      "전깃줄 아래 긴 객차가 이어져요."
    ],
    "sourceUrl": "https://info.korail.com/info/contents.do?key=1504",
    "tile": "#e2edf2",
    "body": "rail",
    "appearance": {
      "label": "한국 고속열차 KTX 산천의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "containership",
    "name": "컨테이너선",
    "englishName": "Container Ship",
    "body": "water",
    "aliases": [
      "컨테이너 화물선",
      "컨테이너 운반선"
    ],
    "cardCue": "색색의 큰 상자를 싣고 바다를 건너요.",
    "summary": "표준 크기의 큰 화물 상자들을 갑판과 배 안에 싣고 항구 사이를 오가요.",
    "cues": [
      "네모난 컨테이너가 여러 층 쌓여 있어요.",
      "상자들을 싣는 길고 넓은 갑판이 있어요."
    ],
    "sourceUrl": "https://www.maersk.com/support/faqs/what-is-ocean-transport",
    "tile": "#dcebf2",
    "appearance": {
      "label": "컨테이너선의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "city-bus",
    "name": "시내버스",
    "englishName": "City Bus",
    "body": "road",
    "aliases": [
      "버스",
      "시내 버스"
    ],
    "cardCue": "정류장을 오가며 사람을 태워요.",
    "summary": "도시의 정류장에 서며 여러 사람을 태우고 다녀요.",
    "cues": [
      "길게 이어진 창문이 보여요.",
      "사람들이 타고 내리는 문을 찾아봐요."
    ],
    "sourceUrl": "https://www.transit.dot.gov/ntd/national-transit-database-ntd-glossary",
    "tile": "#e8eceb",
    "appearance": {
      "label": "시내버스의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "agricultural-tractor",
    "name": "농업용 트랙터",
    "englishName": "Agricultural tractor",
    "body": "farm",
    "aliases": [
      "농기계 트랙터",
      "밭 트랙터"
    ],
    "cardCue": "농기구를 끌고 밭일을 해요.",
    "summary": "농업용 트랙터는 쟁기나 다른 농기구를 끌며 밭을 갈고 농사일을 도와요.",
    "cues": [
      "크고 튼튼한 바퀴가 있어요.",
      "뒤에 쟁기 같은 농기구를 연결할 수 있어요."
    ],
    "sourceUrl": "https://www.deere.com/en/tractors/",
    "tile": "#e5eddc",
    "appearance": {
      "label": "농업용 트랙터의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "road-bicycle",
    "name": "로드 자전거",
    "englishName": "Road Bicycle",
    "body": "cycle",
    "aliases": [
      "로드바이크",
      "경주용 자전거"
    ],
    "cardCue": "가느다란 바퀴로 길을 달려요.",
    "summary": "포장도로에서 가볍게 달리기 좋은 자전거예요.",
    "cues": [
      "가느다란 바퀴가 앞뒤로 있어요.",
      "손잡이가 아래쪽으로 둥글게 구부러졌어요."
    ],
    "sourceUrl": "https://www.trekbikes.com/ie/en_IE/road_buyers_guide/",
    "tile": "#e8ece8",
    "appearance": {
      "label": "로드 자전거의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "hot-air-balloon",
    "name": "열기구",
    "englishName": "Hot-air Balloon",
    "body": "lighter",
    "aliases": [
      "기구",
      "기낭"
    ],
    "cardCue": "안의 공기를 데우면 큰 풍선이 떠올라요.",
    "summary": "버너로 큰 풍선 안의 공기를 데워 띄우고, 아래 바구니에 사람을 태워요.",
    "cues": [
      "커다란 천으로 된 둥근 풍선이 있어요.",
      "아래에 사람들이 타는 바구니가 달려 있어요."
    ],
    "sourceUrl": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/Balloon_Flying_Handbook_FAA-H-8083-11B/bfh_chapter_2.pdf",
    "tile": "#f3e4d3",
    "appearance": {
      "label": "열기구의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "launch-rocket",
    "name": "우주 로켓",
    "englishName": "Launch Rocket",
    "body": "space",
    "aliases": [
      "발사체",
      "우주 발사 로켓"
    ],
    "cardCue": "큰 추진력으로 우주를 향해 솟아올라요.",
    "summary": "엔진과 연료를 실은 긴 로켓이 우주선이나 탐사 장비를 우주로 보내요.",
    "cues": [
      "길고 뾰족한 본체 아래에서 불꽃과 연기가 나와요.",
      "여러 단의 로켓 부분이 길게 이어져 있어요."
    ],
    "sourceUrl": "https://www.nasa.gov/humans-in-space/space-launch-system/sls-fact-sheets/",
    "tile": "#e9e4d7",
    "appearance": {
      "label": "우주 로켓의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "snow-groomer",
    "name": "눈 정리차",
    "englishName": "Snow Groomer",
    "body": "construction",
    "aliases": [
      "설상차",
      "슬로프 정설차",
      "정설차"
    ],
    "cardCue": "울퉁불퉁한 눈을 고르게 해요.",
    "summary": "넓은 궤도로 눈 위를 움직이며 스키장의 눈을 고르게 다듬어요.",
    "cues": [
      "바퀴 대신 넓은 궤도가 있어요.",
      "앞뒤에 눈을 다듬는 장치가 달려 있어요."
    ],
    "sourceUrl": "https://www.pistenbully.com/en/snow-groomers",
    "tile": "#e7eeec",
    "appearance": {
      "label": "눈 정리차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "port-gantry-crane",
    "name": "항만 컨테이너 크레인",
    "englishName": "Container Gantry Crane",
    "body": "special",
    "aliases": [
      "항만 크레인",
      "갠트리 크레인",
      "컨테이너 크레인"
    ],
    "cardCue": "큰 상자를 들어 쌓아요.",
    "summary": "항구의 컨테이너를 들어 옮기고 차곡차곡 쌓는 커다란 장비예요.",
    "cues": [
      "문처럼 생긴 높은 다리 사이로 상자가 보여요.",
      "위쪽의 장치에 컨테이너가 매달려요."
    ],
    "sourceUrl": "https://www.liebherr.com/shared/media/maritime-cranes/downloads-and-brochures/brochures/lcc/liebherr-container-cranes-brochure.pdf",
    "tile": "#e7eeec",
    "appearance": {
      "label": "항만 컨테이너 크레인의 구조와 하는 일 · 사진은 실물 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "bmw-3-series",
    "name": "3시리즈",
    "englishName": "3 Series",
    "brand": "BMW",
    "body": "sedan",
    "aliases": [
      "비엠더블유 3시리즈",
      "BMW 3"
    ],
    "cardCue": "앞쪽에 나란한 두 그릴이 있어요.",
    "summary": "두 개가 이어진 앞쪽 그릴이 눈에 띄는 세단이에요.",
    "cues": [
      "앞쪽 그릴이 두 칸으로 나뉘어요.",
      "가늘고 긴 앞등이 양옆에 있어요."
    ],
    "appearance": {
      "label": "3시리즈 G20 · 2022 부분변경 경찰차 예시",
      "change": "facelift"
    },
    "sourceUrl": "https://www.press.bmwgroup.com/asia/article/detail/T0390114EN/the-new-bmw-3-series-sedan-and-the-new-bmw-3-series-touring?language=en",
    "tile": "#e7ebed",
    "checkedAt": "2026-10-30"
  },
  {
    "id": "toyota-rav4",
    "name": "RAV4",
    "englishName": "RAV4",
    "brand": "토요타",
    "body": "suv",
    "aliases": [
      "라브4",
      "라브포",
      "토요타 라브4"
    ],
    "cardCue": "각진 바퀴 둘레를 살펴봐요.",
    "summary": "각진 바퀴 둘레가 눈에 띄는 SUV예요.",
    "cues": [
      "앞쪽 그릴이 넓고 큼직해요.",
      "바퀴 둘레에 각진 테두리가 있어요."
    ],
    "appearance": {
      "label": "RAV4 5세대 XA50 · 이전 세대 예시",
      "change": "fullchange"
    },
    "sourceUrl": "https://global.toyota/en/newsroom/toyota/21906523.html",
    "tile": "#e7ebed",
    "checkedAt": "2026-10-30"
  },
  {
    "id": "japan-shinkansen",
    "name": "일본 신칸센 N700S",
    "englishName": "N700S Shinkansen",
    "aliases": [
      "신칸센",
      "N700S",
      "일본 고속열차"
    ],
    "cardCue": "긴 코로 바람을 가르며 달려요.",
    "summary": "N700S는 일본 도카이도 신칸센에서 달리는 고속열차예요.",
    "cues": [
      "앞쪽이 아주 길고 매끈해요.",
      "창문이 긴 줄처럼 이어져요."
    ],
    "sourceUrl": "https://global.jr-central.co.jp/en/company/about_shinkansen/",
    "tile": "#e8eff2",
    "body": "rail",
    "appearance": {
      "label": "일본 신칸센 N700S의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "ferry",
    "name": "여객선",
    "englishName": "Ferry",
    "body": "water",
    "aliases": [
      "페리",
      "카페리"
    ],
    "cardCue": "사람을 태우고 물길을 건너요.",
    "summary": "정해진 물길을 오가며 사람과 때로는 자동차도 실어 나르는 배예요.",
    "cues": [
      "사람들이 배에 오르내릴 수 있게 넓은 출입구가 있어요.",
      "차를 싣는 여객선은 자동차가 드나드는 낮은 갑판이 있어요."
    ],
    "sourceUrl": "https://www.shannonferries.com/our-ferries",
    "tile": "#e1edf0",
    "appearance": {
      "label": "여객선의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "double-decker-bus",
    "name": "2층 버스",
    "englishName": "Double-Decker Bus",
    "body": "road",
    "aliases": [
      "이층 버스",
      "더블데커"
    ],
    "cardCue": "위아래 두 층에 앉아요.",
    "summary": "좌석이 위아래 두 층에 있어서 많은 사람이 함께 탈 수 있어요.",
    "cues": [
      "창문이 위아래 두 줄로 있어요.",
      "몸이 높고 길쭉해요."
    ],
    "sourceUrl": "https://na.alexander-dennis.com/company/about/",
    "tile": "#e8eceb",
    "appearance": {
      "label": "2층 버스의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "combine-harvester",
    "name": "곡물 수확 콤바인",
    "englishName": "Combine harvester",
    "body": "farm",
    "aliases": [
      "콤바인",
      "곡물 콤바인",
      "수확기"
    ],
    "cardCue": "곡식을 거두고 알곡을 모아요.",
    "summary": "곡물 콤바인은 곡식을 베고, 알곡과 줄기를 갈라 수확을 도와요.",
    "cues": [
      "앞쪽의 넓은 장치로 곡식을 거둬요.",
      "거둔 곡식을 옮기는 긴 관이 있어요."
    ],
    "sourceUrl": "https://www.deere.com/en-us/products-solutions/harvesting/combines",
    "tile": "#f0e7d3",
    "appearance": {
      "label": "곡물 수확 콤바인의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "mountain-bike",
    "name": "산악자전거",
    "englishName": "Mountain Bike",
    "body": "cycle",
    "aliases": [
      "MTB",
      "산악 자전거"
    ],
    "cardCue": "울퉁불퉁한 길도 달려요.",
    "summary": "굵은 바퀴로 울퉁불퉁한 산길과 흙길을 달리는 자전거예요.",
    "cues": [
      "바퀴에 울퉁불퉁한 무늬가 있어요.",
      "앞바퀴 위의 굵은 충격 흡수 장치를 찾아봐요."
    ],
    "sourceUrl": "https://www.trekbikes.com/us/en_US/mountain_buyers_guide/",
    "tile": "#e8ece8",
    "appearance": {
      "label": "산악자전거의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "airship",
    "name": "비행선",
    "englishName": "Airship",
    "body": "lighter",
    "aliases": [
      "공중 비행선",
      "경식 비행선"
    ],
    "cardCue": "가벼운 가스로 떠서 엔진으로 방향을 바꿔요.",
    "summary": "헬륨으로 떠 있고 엔진과 프로펠러를 움직여 하늘을 나는 기구예요.",
    "cues": [
      "길고 둥근 풍선 모양 몸체가 있어요.",
      "몸체 아래에 사람을 태우는 곤돌라가 달려 있어요."
    ],
    "sourceUrl": "https://zeppelinflug.de/en/zeppelin-nt/technik",
    "tile": "#dfe9f0",
    "appearance": {
      "label": "비행선의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "crew-capsule",
    "name": "승무원 우주 캡슐",
    "englishName": "Crew Capsule",
    "body": "space",
    "aliases": [
      "우주 캡슐",
      "사령선"
    ],
    "cardCue": "사람들이 우주에 다녀오도록 태워요.",
    "summary": "우주비행사가 타고 우주 임무를 한 뒤 지구로 돌아오도록 만든 우주선의 선실 부분이에요.",
    "cues": [
      "둥글고 납작한 원뿔 모양 몸체예요.",
      "겉면에 지구로 돌아올 때를 위한 열 보호막이 있어요."
    ],
    "sourceUrl": "https://www.nasa.gov/humans-in-space/orion-spacecraft/orion-overview/",
    "tile": "#dfe7ec",
    "appearance": {
      "label": "승무원 우주 캡슐의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "forklift",
    "name": "지게차",
    "englishName": "Forklift",
    "body": "construction",
    "aliases": [
      "지게차 트럭",
      "포크리프트"
    ],
    "cardCue": "앞쪽 포크로 짐을 들어요.",
    "summary": "앞쪽의 긴 포크로 무거운 짐을 들어 올려 옮겨요.",
    "cues": [
      "앞쪽에 길게 뻗은 포크가 두 개 있어요.",
      "포크가 오르내리는 높은 기둥이 있어요."
    ],
    "sourceUrl": "https://www.toyotaforklift.com/resource-library/blog/safety-support/5-ways-to-prevent-damage-to-your-forklift-forks",
    "tile": "#e8eae5",
    "checkedAt": "2026-10-31",
    "appearance": {
      "label": "지게차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "equipment"
    }
  },
  {
    "id": "pipelayer",
    "name": "파이프레이어",
    "englishName": "Pipelayer",
    "body": "special",
    "aliases": [
      "파이프 부설기",
      "파이프 부설차"
    ],
    "cardCue": "긴 파이프를 들어 놓아요.",
    "summary": "옆으로 뻗은 팔과 줄로 긴 파이프를 들어 올려 제자리에 놓아요.",
    "cues": [
      "궤도 위 몸 옆에 긴 팔이 뻗어 있어요.",
      "팔에서 내려온 줄이 파이프를 받치고 있어요."
    ],
    "sourceUrl": "https://rent.cat.com/en_US/articles/equipment-pipeline-construction",
    "tile": "#e8eae5",
    "checkedAt": "2026-10-31",
    "appearance": {
      "label": "파이프레이어의 구조와 하는 일 · 사진은 실물 예시",
      "change": "equipment"
    }
  },
  {
    "id": "mercedes-e-class",
    "name": "E클래스",
    "englishName": "E-Class",
    "brand": "메르세데스-벤츠",
    "body": "sedan",
    "aliases": [
      "벤츠 E클래스",
      "이클래스"
    ],
    "cardCue": "별 모양 장식을 찾아봐요.",
    "summary": "앞쪽에 커다란 별 모양 장식이 있는 세단이에요.",
    "cues": [
      "앞쪽 그릴 가운데에 별이 있어요.",
      "뒤쪽 불빛에서도 별 모양을 찾아봐요."
    ],
    "appearance": {
      "label": "E클래스 W214 · 2023 공개 외형",
      "change": "fullchange"
    },
    "sourceUrl": "https://media.mbusa.com/news/2024-e-class-sedan-quick-reference-guide",
    "tile": "#e7ebed",
    "checkedAt": "2026-10-30"
  },
  {
    "id": "honda-crv",
    "name": "CR-V",
    "englishName": "CR-V",
    "brand": "혼다",
    "body": "suv",
    "aliases": [
      "혼다 CRV",
      "씨알브이"
    ],
    "cardCue": "뒤쪽 불빛이 위로 길게 뻗어요.",
    "summary": "넓은 실내를 가진 단정한 모습의 SUV예요.",
    "cues": [
      "뒤쪽 양옆의 불빛이 위로 길게 서 있어요.",
      "앞쪽에는 커다란 그릴이 있어요."
    ],
    "appearance": {
      "label": "CR-V 6세대 · 2022 공개 외형",
      "change": "fullchange"
    },
    "sourceUrl": "https://hondanews.com/en-US/honda-automobiles/releases/release-738212678b96ed3a76e7285afd03f86b-2023-honda-cr-v-press-kit",
    "tile": "#e7ebed",
    "checkedAt": "2026-10-30"
  },
  {
    "id": "french-tgv",
    "name": "프랑스 고속열차 TGV",
    "englishName": "TGV",
    "aliases": [
      "티지브이",
      "TGV",
      "프랑스 고속열차"
    ],
    "cardCue": "객차가 길게 이어지는 고속열차예요.",
    "summary": "TGV는 프랑스에서 여러 도시를 이어 달리는 고속열차예요. 사진에는 TGV INOUI와 TGV Duplex 예시가 보여요.",
    "cues": [
      "앞부분이 낮고 뾰족해요.",
      "객차가 여러 칸 길게 이어져요."
    ],
    "sourceUrl": "https://www.sncf-voyageurs.com/en/travel-with-us/in-france/tgv-inoui/prepare-your-trip/",
    "tile": "#f0e7e4",
    "body": "rail",
    "appearance": {
      "label": "프랑스 고속열차 TGV의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "cruise-ship",
    "name": "크루즈선",
    "englishName": "Cruise Ship",
    "body": "water",
    "aliases": [
      "유람선",
      "대형 여객선"
    ],
    "cardCue": "배를 타고 여행하며 바다를 구경해요.",
    "summary": "사람들이 배 안에서 쉬고 놀며 여러 항구를 여행하는 큰 여객선이에요.",
    "cues": [
      "위아래로 여러 층이 보여요.",
      "배 옆면에 창문이 여러 줄로 나 있어요."
    ],
    "sourceUrl": "https://cruising.org/CLIA-cruise-lines",
    "tile": "#eae4f1",
    "appearance": {
      "label": "크루즈선의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "articulated-bus",
    "name": "굴절버스",
    "englishName": "Articulated Bus",
    "body": "road",
    "aliases": [
      "연결 버스",
      "아코디언 버스"
    ],
    "cardCue": "긴 몸 가운데가 구부러져요.",
    "summary": "두 부분이 연결된 긴 버스로 많은 사람을 태우고 다녀요.",
    "cues": [
      "몸 가운데 주름진 연결 부분이 있어요.",
      "창문이 길게 이어져 있어요."
    ],
    "sourceUrl": "https://www.newflyer.com/2020/02/alexandria-is-testing-out-its-first-electric-accordion-bus-this-week/",
    "tile": "#e8eceb",
    "appearance": {
      "label": "굴절버스의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "cotton-picker",
    "name": "목화 수확기",
    "englishName": "Cotton picker",
    "body": "farm",
    "aliases": [
      "목화 따는 기계",
      "코튼 피커",
      "목화 수확 기계"
    ],
    "cardCue": "하얀 목화를 모아 줘요.",
    "summary": "목화 수확기는 목화밭을 지나며 솜을 따고 모으는 농기계예요.",
    "cues": [
      "앞에 뾰족한 길잡이 장치가 나란히 있어요.",
      "커다란 몸 안에 따낸 솜을 모아요."
    ],
    "sourceUrl": "https://www.deere.com/en-us/products-and-solutions/harvesting",
    "tile": "#f0e7de",
    "appearance": {
      "label": "목화 수확기의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "folding-bicycle",
    "name": "접이식 자전거",
    "englishName": "Folding Bicycle",
    "body": "cycle",
    "aliases": [
      "접는 자전거",
      "폴딩 자전거"
    ],
    "cardCue": "작게 접어 가지고 다녀요.",
    "summary": "몸을 접어서 좁은 곳에 보관하거나 함께 들고 다닐 수 있어요.",
    "cues": [
      "바퀴 두 개가 작고 동그래요.",
      "몸 가운데 접히는 이음새를 찾아봐요."
    ],
    "sourceUrl": "https://global.brompton.com/why-brompton/how-to-fold",
    "tile": "#e8ece8",
    "appearance": {
      "label": "접이식 자전거의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "space-shuttle",
    "name": "우주왕복선",
    "englishName": "Space Shuttle",
    "body": "space",
    "aliases": [
      "우주 셔틀",
      "궤도선"
    ],
    "cardCue": "로켓으로 올라가고 비행기처럼 내려와요.",
    "summary": "우주로 갔다가 날개를 이용해 활주로에 착륙하도록 만든 재사용 우주선이에요.",
    "cues": [
      "넓고 삼각형에 가까운 날개가 있어요.",
      "발사할 때에는 큰 연료 탱크와 로켓 부스터가 함께 붙어요."
    ],
    "sourceUrl": "https://www.nasa.gov/reference/the-space-shuttle/",
    "tile": "#e7e7ed",
    "appearance": {
      "label": "우주왕복선의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "pile-driver",
    "name": "항타기",
    "englishName": "Pile Driver",
    "body": "special",
    "aliases": [
      "말뚝 박는 기계",
      "파일 드라이버"
    ],
    "cardCue": "긴 말뚝을 땅속에 박아요.",
    "summary": "높은 기둥에 달린 무거운 망치로 말뚝을 두드려 땅속에 박아요.",
    "cues": [
      "높이 솟은 기둥에 기다란 망치가 달려 있어요.",
      "망치 아래에서 땅속으로 들어가는 말뚝을 찾아봐요."
    ],
    "sourceUrl": "https://www.liebherr.com/en-us/deep-foundation/methods/pile-driving/impact-driving-4424956",
    "tile": "#e8eae5",
    "checkedAt": "2026-10-31",
    "appearance": {
      "label": "항타기의 구조와 하는 일 · 사진은 실물 예시",
      "change": "equipment"
    }
  },
  {
    "id": "toyota-corolla",
    "name": "코롤라",
    "englishName": "Corolla",
    "brand": "토요타",
    "body": "sedan",
    "aliases": [
      "토요타 코롤라",
      "코롤라 알티스"
    ],
    "cardCue": "넓은 앞쪽 입을 찾아봐요.",
    "summary": "작고 단정한 모습의 세단이에요.",
    "cues": [
      "앞쪽 아래에 넓은 검은 그릴이 있어요.",
      "앞등이 양옆으로 길게 뻗어 있어요."
    ],
    "appearance": {
      "label": "코롤라 알티스 E210 · 2023 부분변경 인도네시아 예시",
      "change": "facelift"
    },
    "sourceUrl": "https://www.toyota.astra.co.id/corporate-information/news-promo/read/ada-pilihan-hybrid-ev-ini-daftar-harga-new-corolla-altis-dengan-improvement-pada-eksterior-dan-interior",
    "tile": "#e7ebed",
    "checkedAt": "2026-10-30"
  },
  {
    "id": "bmw-x5",
    "name": "X5",
    "englishName": "X5",
    "brand": "BMW",
    "body": "suv",
    "aliases": [
      "비엠더블유 X5",
      "엑스파이브"
    ],
    "cardCue": "두 칸으로 나뉜 그릴을 찾아봐요.",
    "summary": "크고 듬직한 몸을 가진 SUV예요.",
    "cues": [
      "앞쪽 그릴이 두 칸으로 나뉘어요.",
      "앞등이 가늘고 길게 뻗어요."
    ],
    "appearance": {
      "label": "X5 G05 · 2023 부분변경 외형",
      "change": "facelift"
    },
    "sourceUrl": "https://www.press.bmwgroup.com/usa/article/detail/T0408460EN_US/the-2024-bmw-x5-and-x6?language=en_US",
    "tile": "#e7ebed",
    "checkedAt": "2026-10-30"
  },
  {
    "id": "steam-locomotive",
    "name": "증기기관차",
    "englishName": "Steam locomotive",
    "aliases": [
      "증기 열차",
      "옛날 기관차",
      "스팀 기관차"
    ],
    "cardCue": "뜨거운 증기로 바퀴를 움직여요.",
    "summary": "증기기관차는 물을 끓여 만든 증기의 힘으로 움직이는 옛날 기차예요.",
    "cues": [
      "앞에 둥근 굴뚝이 있어요.",
      "큰 바퀴 옆에 긴 막대가 있어요."
    ],
    "sourceUrl": "https://blog.railwaymuseum.org.uk/agenoria-tracing-the-past/",
    "tile": "#eee7df",
    "body": "rail",
    "appearance": {
      "label": "증기기관차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "tugboat",
    "name": "예인선",
    "englishName": "Tugboat",
    "body": "water",
    "aliases": [
      "터그보트",
      "항구 예인선"
    ],
    "cardCue": "힘센 작은 배가 큰 배를 밀고 끌어요.",
    "summary": "항구에서 큰 배가 방향을 바꾸거나 부두에 다가가도록 밀고 끌어 도와요.",
    "cues": [
      "가장자리에 검은 고무 완충재가 있어요.",
      "큰 배 곁에 붙은 작고 튼튼한 배를 찾아봐요."
    ],
    "sourceUrl": "https://svitzer.com/",
    "tile": "#e9e4d9",
    "appearance": {
      "label": "예인선의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "school-bus",
    "name": "스쿨버스",
    "englishName": "School Bus",
    "body": "road",
    "aliases": [
      "학교 버스",
      "통학 버스"
    ],
    "cardCue": "아이들을 학교로 태워줘요.",
    "summary": "아이들이 학교에 오가도록 태워 주는 버스예요.",
    "cues": [
      "사진 속 스쿨버스는 노란색이에요.",
      "옆쪽에 창문이 줄지어 있어요."
    ],
    "sourceUrl": "https://www.blue-bird.com/love-the-bus-month-honoring-an-american-icon-and-the-people-who-keep-it-moving/",
    "tile": "#e8eceb",
    "appearance": {
      "label": "스쿨버스의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "grape-harvester",
    "name": "포도 수확기",
    "englishName": "Grape harvester",
    "body": "farm",
    "aliases": [
      "포도 따는 기계",
      "포도 수확 기계",
      "빈야드 하베스터"
    ],
    "cardCue": "포도밭을 지나며 포도를 모아요.",
    "summary": "포도 수확기는 포도나무 줄을 따라가며 잘 익은 포도를 수확해요.",
    "cues": [
      "기계가 포도나무 줄 위를 감싸듯 지나가요.",
      "포도밭의 긴 줄을 따라 움직여요."
    ],
    "sourceUrl": "https://www.pellenc.com/en-gb/our-products/from-the-vineyard-to-the-winery/vine-growing/harvesting-and-multifunction-machine-for-wide-row-vineyards",
    "tile": "#e4eee0",
    "appearance": {
      "label": "포도 수확기의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "cargo-bicycle",
    "name": "화물 자전거",
    "englishName": "Cargo Bicycle",
    "body": "cycle",
    "aliases": [
      "짐 자전거",
      "화물용 자전거",
      "카고 바이크"
    ],
    "cardCue": "커다란 짐을 싣고 달려요.",
    "summary": "길게 뻗은 몸에 짐을 실을 수 있는 두 바퀴 자전거예요.",
    "cues": [
      "손잡이 앞쪽에 짐을 싣는 공간이 있어요.",
      "앞뒤에 바퀴가 하나씩 있어요."
    ],
    "sourceUrl": "https://www.ternbicycles.com/ch/node/348889",
    "tile": "#e8ece8",
    "appearance": {
      "label": "화물 자전거의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "lunar-rover",
    "name": "아폴로 달 탐사차",
    "englishName": "Apollo Lunar Roving Vehicle",
    "body": "space",
    "aliases": [
      "달 차",
      "월면차",
      "달 로버"
    ],
    "cardCue": "우주인이 달 표면을 달리며 탐사해요.",
    "summary": "아폴로 15·16·17호 우주인이 달 표면을 더 멀리 살펴보려고 타고 다닌 전기 탐사차예요.",
    "cues": [
      "네 개의 바퀴와 두 개의 좌석이 있어요.",
      "접시 모양 안테나와 장비가 있어요."
    ],
    "sourceUrl": "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
    "tile": "#e2e1d8",
    "appearance": {
      "label": "아폴로 달 탐사차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "honda-civic",
    "name": "시빅",
    "englishName": "Civic",
    "brand": "혼다",
    "body": "sedan",
    "aliases": [
      "혼다 시빅",
      "시빅 세단"
    ],
    "cardCue": "길쭉한 앞등을 찾아봐요.",
    "summary": "낮고 단정한 모습의 세단이에요.",
    "cues": [
      "양쪽 앞등이 가로로 길어요.",
      "지붕이 뒤쪽으로 부드럽게 내려가요."
    ],
    "appearance": {
      "label": "시빅 세단 11세대 · 2021 공개 외형",
      "change": "fullchange"
    },
    "sourceUrl": "https://hondanews.com/en-US/honda-automobiles/releases/release-53541be6030b25a47a2899aba12aa1f6-2022-honda-civic-sedan-press-kit",
    "tile": "#e7ebed",
    "checkedAt": "2026-10-30"
  },
  {
    "id": "mercedes-glc",
    "name": "GLC",
    "englishName": "GLC",
    "brand": "메르세데스-벤츠",
    "body": "suv",
    "aliases": [
      "벤츠 GLC",
      "지엘씨"
    ],
    "cardCue": "앞쪽의 별 모양을 찾아봐요.",
    "summary": "별 모양 장식을 단 부드러운 모습의 SUV예요.",
    "cues": [
      "그릴 가운데에 커다란 별이 있어요.",
      "앞등이 그릴 양옆에 이어져 있어요."
    ],
    "appearance": {
      "label": "GLC X254 · 2022 공개 외형",
      "change": "fullchange"
    },
    "sourceUrl": "https://media.mbusa.com/news/2023-mercedes-benz-model-line-updates",
    "tile": "#e7ebed",
    "checkedAt": "2026-10-30"
  },
  {
    "id": "freight-train",
    "name": "화물열차",
    "englishName": "Freight train",
    "aliases": [
      "화물 기차",
      "짐 열차",
      "컨테이너 열차"
    ],
    "cardCue": "물건을 가득 싣고 달려요.",
    "summary": "화물열차는 컨테이너와 여러 물건을 실어 나르는 기차예요.",
    "cues": [
      "짐을 싣는 화차가 길게 이어져요.",
      "기관차가 화차들을 끌어요."
    ],
    "sourceUrl": "https://info.korail.com/info/contents.do?key=870",
    "tile": "#e8ece2",
    "body": "rail",
    "appearance": {
      "label": "화물열차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "icebreaker",
    "name": "쇄빙선",
    "englishName": "Icebreaker",
    "body": "water",
    "aliases": [
      "얼음깨기 배",
      "쇄빙선박"
    ],
    "cardCue": "두꺼운 얼음을 깨며 길을 만들어요.",
    "summary": "튼튼한 선체로 얼음을 깨고 다른 배가 지나갈 길을 열어 줘요.",
    "cues": [
      "앞부분이 단단하고 둥글게 올라가 있어요.",
      "깨진 얼음 사이로 배들이 지나갈 수 있게 안내해요."
    ],
    "sourceUrl": "https://www.canada.ca/en/canadian-coast-guard/programs/icebreaking-canada.html",
    "tile": "#e2eef3",
    "appearance": {
      "label": "쇄빙선의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "fire-engine",
    "name": "소방차",
    "englishName": "Fire Engine",
    "body": "road",
    "aliases": [
      "불 끄는 차",
      "펌프 소방차"
    ],
    "cardCue": "불이 난 곳으로 달려가요.",
    "summary": "소방관과 장비를 싣고 가서 불을 끄는 일을 도와요.",
    "cues": [
      "빨간 몸에 반짝이는 불빛이 있어요.",
      "옆쪽에 장비를 넣는 칸이 보여요."
    ],
    "sourceUrl": "https://www.rosenbauer.com/News/News-Hub/Fachpresse/2023/01/rosenbauer-press-release-collective-tender-mecklenburg-western-pomerania-en.pdf",
    "tile": "#e8eceb",
    "appearance": {
      "label": "소방차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "motor-scooter",
    "name": "스쿠터",
    "englishName": "Motor Scooter",
    "body": "cycle",
    "aliases": [
      "스쿠터 오토바이",
      "베스파"
    ],
    "cardCue": "작은 바퀴로 거리를 달려요.",
    "summary": "작은 바퀴와 발을 올릴 자리가 있는 오토바이예요.",
    "cues": [
      "앞쪽에 둥근 불빛이 있어요.",
      "안장 앞쪽에 발을 놓는 공간이 있어요."
    ],
    "sourceUrl": "https://www.piaggiogroup.com/en/group/history",
    "tile": "#e8ece8",
    "appearance": {
      "label": "스쿠터의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "toyota-camry",
    "name": "캠리",
    "englishName": "Camry",
    "brand": "토요타",
    "body": "sedan",
    "aliases": [
      "토요타 캠리"
    ],
    "cardCue": "날렵한 앞등을 찾아봐요.",
    "summary": "길고 낮은 몸에 가느다란 앞등을 가진 세단이에요.",
    "cues": [
      "앞등이 양옆으로 길게 이어져요.",
      "지붕이 뒤쪽으로 부드럽게 내려가요."
    ],
    "appearance": {
      "label": "캠리 XV80 · 2023 공개 중국 판매형 예시",
      "change": "fullchange"
    },
    "sourceUrl": "https://pressroom.toyota.com/first-ever-toyota-crown-signia-and-next-generation-toyota-camry-arrive-in-los-angeles-for-auto-show-debut/",
    "tile": "#e7ebed",
    "checkedAt": "2026-10-30"
  },
  {
    "id": "land-rover-defender",
    "name": "디펜더 110",
    "englishName": "Defender 110",
    "brand": "랜드로버",
    "body": "suv",
    "aliases": [
      "랜드로버 디펜더",
      "디펜더"
    ],
    "cardCue": "뒤에 동그란 바퀴를 달았어요.",
    "summary": "반듯하고 튼튼해 보이는 SUV예요.",
    "cues": [
      "뒤쪽 문에 동그란 예비 바퀴가 달렸어요.",
      "차 지붕과 몸이 네모나게 보여요."
    ],
    "appearance": {
      "label": "디펜더 110 L663 · 2019 공개 외형",
      "change": "fullchange"
    },
    "sourceUrl": "https://media.jaguarlandrover.com/news/2021/07/unstoppable-capability-land-rover-defender-supports-red-bull-x-alps-champion-maurer",
    "tile": "#e7ebed",
    "checkedAt": "2026-10-30"
  },
  {
    "id": "subway-train",
    "name": "지하철 전동차",
    "englishName": "Subway train",
    "aliases": [
      "지하철",
      "전철",
      "도시철도 열차"
    ],
    "cardCue": "도시 안을 오가며 사람들을 태워요.",
    "summary": "지하철 전동차는 역과 역 사이를 오가며 도시의 많은 사람을 태우는 열차예요.",
    "cues": [
      "문과 창문이 여러 칸에 반복돼요.",
      "여러 칸이 길게 이어져 있어요."
    ],
    "sourceUrl": "https://topis.seoul.go.kr/eng/page/transInfo_1_2.jsp",
    "tile": "#eee9df",
    "body": "rail",
    "appearance": {
      "label": "지하철 전동차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "research-submarine",
    "name": "연구용 잠수정",
    "englishName": "Research Submersible",
    "body": "water",
    "aliases": [
      "심해 탐사정",
      "연구 잠수정"
    ],
    "cardCue": "바닷속을 내려가 깊은 바다를 살펴봐요.",
    "summary": "사람이 타거나 스스로 움직이는 작은 잠수정으로 바닷속을 관찰하고 조사해요.",
    "cues": [
      "물속에서 버틸 수 있도록 단단하고 밀폐된 몸체가 있어요.",
      "창이나 카메라, 센서를 사용해 깊은 바다를 살펴봐요."
    ],
    "sourceUrl": "https://www2.whoi.edu/site/deepsubmergencelab/vehicles/",
    "tile": "#dbe8ee",
    "appearance": {
      "label": "연구용 잠수정의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "aerial-ladder-truck",
    "name": "고가 소방차",
    "englishName": "Aerial Ladder Truck",
    "body": "road",
    "aliases": [
      "고가 사다리차",
      "사다리차"
    ],
    "cardCue": "높은 곳까지 장치를 펼쳐요.",
    "summary": "긴 사다리를 펼쳐 높은 곳에서 사람을 구하거나 불을 꺼요.",
    "cues": [
      "차 위에 높이 뻗는 장치가 있어요.",
      "끝쪽에 사람이 설 수 있는 바구니가 있어요."
    ],
    "sourceUrl": "https://www.rosenbauer.com/en/products/vehicles/aerials/aerial-ladders",
    "tile": "#e8eceb",
    "appearance": {
      "label": "사다리 소방차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "touring-motorcycle",
    "name": "여행용 오토바이",
    "englishName": "Touring Motorcycle",
    "body": "cycle",
    "aliases": [
      "투어링 바이크",
      "골드윙"
    ],
    "cardCue": "짐을 싣고 멀리 여행해요.",
    "summary": "바람을 막는 창과 짐칸을 달고 멀리 여행하기 좋은 오토바이예요.",
    "cues": [
      "손잡이 앞에 바람을 막는 창이 있어요.",
      "뒤쪽과 옆에 짐칸이 있어요."
    ],
    "sourceUrl": "https://powersports.honda.com/motorcycle/touring/gold-wing-tour/features",
    "tile": "#e8ece8",
    "appearance": {
      "label": "여행용 오토바이의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "tram",
    "name": "노면전차 트램",
    "englishName": "Tram",
    "aliases": [
      "트램",
      "노면전차",
      "시가 전차"
    ],
    "cardCue": "길 위의 선로를 따라 달려요.",
    "summary": "트램은 도시 길 위에 놓인 선로를 따라 사람들을 태우고 다니는 전차예요.",
    "cues": [
      "자동차와 같은 거리에서 달려요.",
      "낮은 승강장과 가까운 문이 있어요."
    ],
    "sourceUrl": "https://katowice.eu/dla-mieszkanca/transport-w-miescie",
    "tile": "#f1e6e3",
    "body": "rail",
    "appearance": {
      "label": "노면전차 트램의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "sailboat",
    "name": "돛단배",
    "englishName": "Sailboat",
    "body": "water",
    "aliases": [
      "범선",
      "요트"
    ],
    "cardCue": "바람을 돛에 받아 앞으로 나아가요.",
    "summary": "돛에 바람을 받아 물 위를 움직이는 배예요.",
    "cues": [
      "높은 돛대와 바람을 받는 큰 돛이 있어요.",
      "돛의 방향을 바꾸며 바람을 타고 나아가요."
    ],
    "sourceUrl": "https://www.rya.org.uk/get-started/sailing/",
    "tile": "#e5eff1",
    "appearance": {
      "label": "돛단배의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "ambulance",
    "name": "구급차",
    "englishName": "Ambulance",
    "body": "road",
    "aliases": [
      "앰뷸런스",
      "응급차"
    ],
    "cardCue": "아픈 사람을 병원으로 옮겨요.",
    "summary": "아프거나 다친 사람을 돕고 필요할 때 병원으로 옮겨요.",
    "cues": [
      "지붕에 반짝이는 불빛이 있어요.",
      "뒤쪽에 사람과 장비가 탈 공간이 있어요."
    ],
    "sourceUrl": "https://www.nhs.uk/nhs-services/hospitals/going-into-hospital/how-to-organise-transport-to-and-from-hospital/",
    "tile": "#e8eceb",
    "appearance": {
      "label": "구급차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "monorail",
    "name": "현수식 모노레일",
    "englishName": "Suspended monorail",
    "aliases": [
      "모노레일",
      "현수 모노레일",
      "매달린 열차"
    ],
    "cardCue": "위에 있는 길에 매달려 달려요.",
    "summary": "현수식 모노레일은 열차가 위쪽의 한 줄 길에 매달려 달리는 열차예요.",
    "cues": [
      "차량이 선로 아래에 매달려 있어요.",
      "높은 기둥이 선로를 떠받치고 있어요."
    ],
    "sourceUrl": "https://english.wuhan.gov.cn/H_1/NWP/202309/t20230927_2272796.shtml",
    "tile": "#e3edf0",
    "body": "rail",
    "appearance": {
      "label": "현수식 모노레일의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "hovercraft",
    "name": "호버크래프트",
    "englishName": "Hovercraft",
    "body": "water",
    "aliases": [
      "공기부양선",
      "에어쿠션선"
    ],
    "cardCue": "공기 쿠션을 타고 물과 땅 위를 미끄러져요.",
    "summary": "아래로 내보낸 공기로 몸을 살짝 띄워 물이나 평평한 땅 위를 달려요.",
    "cues": [
      "배 밑둘레에 유연한 고무 스커트가 둘러져 있어요.",
      "뒤쪽 큰 프로펠러가 공기를 밀어 앞으로 나아가요."
    ],
    "sourceUrl": "https://hovercraft-museum.org/whats-here/",
    "tile": "#e8e7d8",
    "appearance": {
      "label": "호버크래프트의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "police-car",
    "name": "경찰차",
    "englishName": "Police Car",
    "body": "road",
    "aliases": [
      "순찰차",
      "경찰 자동차"
    ],
    "cardCue": "동네를 살피고 도움이 필요한 곳으로 가요.",
    "summary": "경찰관을 태우고 동네를 살피거나 도움이 필요한 곳으로 가요.",
    "cues": [
      "지붕 위에 반짝이는 불빛이 있어요.",
      "옆에 경찰을 뜻하는 글씨와 무늬가 있어요."
    ],
    "sourceUrl": "https://www.college.police.uk/career-learning/career-development/career-pathways/response-policing",
    "tile": "#e8eceb",
    "appearance": {
      "label": "경찰차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "amphibious-bus",
    "name": "수륙양용 버스",
    "englishName": "Amphibious Bus",
    "body": "water",
    "aliases": [
      "물에 뜨는 버스",
      "수륙양용차"
    ],
    "cardCue": "길과 물 위를 모두 다녀요.",
    "summary": "바퀴로 길을 달리다가 물에 들어가 배처럼 떠서 움직여요.",
    "cues": [
      "버스처럼 창문이 길게 이어져 있어요.",
      "배처럼 생긴 몸 아래에 바퀴도 있어요."
    ],
    "sourceUrl": "https://www.hamburg.de/tourismus/hamburg-erkunden/stadtfuehrung/hafencity-river-bus-366632",
    "tile": "#e7eeec",
    "appearance": {
      "label": "수륙양용 버스의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "garbage-truck",
    "name": "쓰레기 수거차",
    "englishName": "Garbage Truck",
    "body": "road",
    "aliases": [
      "청소차",
      "쓰레기차",
      "수거차"
    ],
    "cardCue": "쓰레기를 모아 실어 날라요.",
    "summary": "거리와 집에서 나온 쓰레기를 모아 처리하는 곳으로 옮겨요.",
    "cues": [
      "커다란 상자 같은 적재함이 있어요.",
      "운전실 뒤로 긴 몸이 이어져요."
    ],
    "sourceUrl": "https://home4.nyc.gov/site/dsny/about/about-dsny.page",
    "tile": "#e8eceb",
    "appearance": {
      "label": "쓰레기 수거차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "kayak",
    "name": "카약",
    "englishName": "Kayak",
    "body": "water",
    "aliases": [
      "카약배",
      "카약 보트"
    ],
    "cardCue": "양쪽에 날이 달린 노로 저어요.",
    "summary": "좁고 긴 배에 앉아 양쪽 끝에 날이 달린 노로 물을 저어요.",
    "cues": [
      "배가 길고 가늘어요.",
      "사진 속 노의 양쪽 끝에 넓은 날이 있어요."
    ],
    "sourceUrl": "https://www.canoeicf.com/sites/default/files/2022_icf_canoe_sprint_and_paracanoe_world_championships_halifax_-_media_guide.pdf",
    "tile": "#e7eeec",
    "appearance": {
      "label": "카약의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "street-sweeper",
    "name": "도로 청소차",
    "englishName": "Street Sweeper",
    "body": "road",
    "aliases": [
      "노면 청소차",
      "도로 청소기"
    ],
    "cardCue": "빙글빙글 솔로 길을 청소해요.",
    "summary": "차 아래의 솔을 돌려 도로의 먼지와 쓰레기를 쓸어 모아요.",
    "cues": [
      "몸 아래 동그란 솔이 보여요.",
      "솔을 단 채 바퀴로 움직여요."
    ],
    "sourceUrl": "https://home4.nyc.gov/site/dsny/about/about-dsny.page",
    "tile": "#e8eceb",
    "appearance": {
      "label": "도로 청소차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "canoe",
    "name": "카누",
    "englishName": "Canoe",
    "body": "water",
    "aliases": [
      "카누배",
      "카누 보트"
    ],
    "cardCue": "한쪽에 날이 달린 노로 저어요.",
    "summary": "위가 열린 카누에 타고 한쪽 끝에 날이 달린 노로 물을 저어요.",
    "cues": [
      "사진 속 배의 윗부분이 열려 있어요.",
      "한쪽 끝에 넓은 날이 달린 노를 찾아봐요."
    ],
    "sourceUrl": "https://www.canoeicf.com/sites/default/files/2022_icf_canoe_sprint_and_paracanoe_world_championships_halifax_-_media_guide.pdf",
    "tile": "#e7eeec",
    "appearance": {
      "label": "카누의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "snowplow",
    "name": "제설차",
    "englishName": "Snowplow",
    "body": "road",
    "aliases": [
      "눈 치우는 차",
      "눈삽차"
    ],
    "cardCue": "앞쪽 날로 눈을 밀어내요.",
    "summary": "차 앞의 넓은 날로 도로에 쌓인 눈을 밀어내요.",
    "cues": [
      "앞쪽에 넓은 눈 치우는 날이 있어요.",
      "뒤쪽에 커다란 트럭 몸이 이어져요."
    ],
    "sourceUrl": "https://portal.311.nyc.gov/article/?kanumber=KA-02296",
    "tile": "#e8eceb",
    "appearance": {
      "label": "제설차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "lifeboat",
    "name": "해상 구조정",
    "englishName": "Lifeboat",
    "body": "water",
    "aliases": [
      "구명정",
      "연안 구조정"
    ],
    "cardCue": "도움이 필요한 사람을 만나러 물 위로 나가요.",
    "summary": "바다나 강에서 위험에 처한 사람을 찾아가 안전한 곳으로 옮기는 구조선이에요.",
    "cues": [
      "눈에 잘 띄는 주황색으로 칠한 배가 많아요.",
      "큰 연안 구조선과 고무 튜브형 작은 배가 있어요."
    ],
    "sourceUrl": "https://rnli.org/what-we-do/lifeboats-and-stations/our-lifeboat-fleet",
    "tile": "#e4edf1",
    "checkedAt": "2026-10-31",
    "appearance": {
      "label": "해상 구조정의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    }
  },
  {
    "id": "tow-truck",
    "name": "견인차",
    "englishName": "Tow Truck",
    "body": "road",
    "aliases": [
      "렉카",
      "구난차"
    ],
    "cardCue": "움직이기 어려운 차를 옮겨요.",
    "summary": "고장 나거나 움직이기 어려운 차를 싣거나 끌어서 옮겨요.",
    "cues": [
      "뒤쪽에 자동차를 싣는 긴 판이 있어요.",
      "사진 속에서는 작은 차를 판 위에 실었어요."
    ],
    "sourceUrl": "https://www.acg.aaa.com/connect/blogs/5c/auto/what-to-expect-when-you-get-towed",
    "tile": "#e8eceb",
    "appearance": {
      "label": "견인차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "fireboat",
    "name": "소방정",
    "englishName": "Fireboat",
    "body": "water",
    "aliases": [
      "소방선",
      "소방 보트"
    ],
    "cardCue": "물 위에서 물대포로 불을 꺼요.",
    "summary": "소방 장비와 강한 물대포를 싣고 배나 물가의 불을 끄는 배예요.",
    "cues": [
      "갑판 위에 물을 뿜는 큰 노즐이 있어요.",
      "배 가장자리에 난간이 있어요."
    ],
    "sourceUrl": "https://www.london-fire.gov.uk/about-us/services-and-facilities/vehicles-and-equipment/",
    "tile": "#e7e4d8",
    "checkedAt": "2026-10-31",
    "appearance": {
      "label": "소방정의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    }
  },
  {
    "id": "airport-tug",
    "name": "비행기 견인차",
    "englishName": "Aircraft Tug",
    "body": "road",
    "aliases": [
      "항공기 견인차",
      "푸시백 트랙터"
    ],
    "cardCue": "비행기를 천천히 밀고 끌어요.",
    "summary": "공항에서 커다란 비행기가 움직이도록 밀거나 끌어주는 작은 차예요.",
    "cues": [
      "몸이 낮고 납작해요.",
      "비행기를 연결하는 장치를 찾아봐요."
    ],
    "sourceUrl": "https://trepel.com/blog/2024/05/27/green-taxiing-with-the-new-tltv-charger-380-electro-2/",
    "tile": "#e7eeec",
    "appearance": {
      "label": "비행기 견인차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "dredger",
    "name": "준설선",
    "englishName": "Dredger",
    "body": "water",
    "aliases": [
      "드레저",
      "준설 작업선"
    ],
    "cardCue": "물밑 모래와 흙을 퍼내 물길을 깊게 만들어요.",
    "summary": "강이나 항구 바닥에 쌓인 모래와 흙을 퍼내거나 빨아 올려 배가 다니는 물길을 정비해요.",
    "cues": [
      "갑판에 긴 관이나 준설 장치가 보여요.",
      "톱니가 달린 커터헤드로 바닥 흙을 풀기도 해요."
    ],
    "sourceUrl": "https://www.sam.usace.army.mil/Missions/Spatial-Data-Branch/Dredging-Quality-Management/Education/About-Dredging/",
    "tile": "#e4e9dd",
    "checkedAt": "2026-10-31",
    "appearance": {
      "label": "준설선의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    }
  },
  {
    "id": "aircraft-deicing-truck",
    "name": "비행기 제빙차",
    "englishName": "Aircraft Deicing Truck",
    "body": "road",
    "aliases": [
      "항공기 제빙차",
      "얼음 제거차"
    ],
    "cardCue": "비행기의 얼음과 눈을 없애요.",
    "summary": "긴 팔 끝에서 약액을 뿌려 비행기에 붙은 눈과 얼음을 제거해요.",
    "cues": [
      "차 위로 아주 긴 팔이 뻗어 있어요.",
      "팔 끝의 작은 작업 공간을 찾아봐요."
    ],
    "sourceUrl": "https://vestergaardcompany.com/product/aircraft-deicing/the-elephant-beta/",
    "tile": "#e7eeec",
    "appearance": {
      "label": "비행기 제빙차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "personal-watercraft",
    "name": "수상 오토바이",
    "englishName": "Personal Watercraft",
    "body": "water",
    "aliases": [
      "제트스키",
      "워터크래프트"
    ],
    "cardCue": "사람이 올라타 물 위를 빠르게 달려요.",
    "summary": "사람이 몸을 싣고 타며 물 분사 장치로 나아가는 작은 수상 탈것이에요.",
    "cues": [
      "낮고 길쭉한 몸 위에 손잡이가 있어요.",
      "타는 사람이 선체 안보다 위에 올라타요."
    ],
    "sourceUrl": "https://uscgboating.org/library/regulations/BSX-Policy-Letter-22-02-eFoils-and-JetBoards-ch-1.pdf",
    "tile": "#e2edf0",
    "checkedAt": "2026-10-31",
    "appearance": {
      "label": "수상 오토바이의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    }
  },
  {
    "id": "airport-belt-loader",
    "name": "공항 수하물 벨트차",
    "englishName": "Airport Belt Loader",
    "body": "road",
    "aliases": [
      "수하물 운반 벨트차",
      "벨트 로더"
    ],
    "cardCue": "움직이는 띠로 짐을 올려요.",
    "summary": "공항에서 움직이는 띠로 가방을 비행기에 싣거나 내리는 차예요.",
    "cues": [
      "차 위에 길고 납작한 띠가 있어요.",
      "띠가 비행기의 짐칸 쪽으로 기울어져 있어요."
    ],
    "sourceUrl": "https://www.mulag.de/en/ground-support-equipment/applications/loading-unloading/",
    "tile": "#e7eeec",
    "appearance": {
      "label": "공항 수하물 벨트차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-10-30"
  },
  {
    "id": "car-carrier-truck",
    "name": "자동차 운반 트럭",
    "englishName": "Car Carrier Truck",
    "body": "road",
    "aliases": [
      "자동차 운반차",
      "차 나르는 트럭",
      "카 캐리어"
    ],
    "cardCue": "자동차를 싣고 달려요.",
    "summary": "여러 대의 자동차를 위아래로 실어서 다른 곳으로 옮겨요.",
    "cues": [
      "트럭 위에 자동차들이 줄지어 있어요.",
      "자동차를 싣는 자리가 위아래로 나뉘어요."
    ],
    "sourceUrl": "https://www.scania.com/group/en/home/newsroom/news/2023/worlds_first_all_electric_scania_standard_car_transporter_goes_into_service.html",
    "tile": "#e8eae5",
    "checkedAt": "2026-10-31",
    "appearance": {
      "label": "자동차 운반 트럭의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    }
  }
];
