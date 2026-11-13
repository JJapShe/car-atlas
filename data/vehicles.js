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
  },
  {
    "id": "nissan-rogue",
    "name": "로그",
    "englishName": "Rogue",
    "brand": "닛산",
    "body": "suv",
    "aliases": [],
    "cardCue": "V 모양 그릴을 찾아봐요.",
    "summary": "큼직한 몸과 두 층으로 나뉜 앞등을 가진 SUV예요.",
    "cues": [
      "앞 그릴 둘레에 V 모양 테두리가 있어요.",
      "앞쪽 불빛은 위아래로 나뉘어 있어요."
    ],
    "appearance": {
      "label": "2023 Rogue SV · T33 변경 전 미국형",
      "change": "verified"
    },
    "sourceUrl": "https://usa.nissannews.com/en-US/releases/2021-nissan-rogue-press-kit",
    "tile": "#e7eae4",
    "checkedAt": "2026-11-04"
  },
  {
    "id": "mazda-cx5",
    "name": "CX-5",
    "englishName": "CX-5",
    "brand": "마쓰다",
    "body": "suv",
    "aliases": [],
    "cardCue": "큰 그릴과 길쭉한 앞등이 보여요.",
    "summary": "둥근 곡선이 이어지는 SUV예요.",
    "cues": [
      "앞쪽에 커다란 그릴이 있어요.",
      "앞등이 옆으로 길게 뻗어 있어요."
    ],
    "appearance": {
      "label": "2024 CX-5 Suna · 캐나다 사양",
      "change": "verified"
    },
    "sourceUrl": "https://news.mazdausa.com/2021-11-30-2022-Mazda-CX-5-Pricing-and-Packaging,1",
    "tile": "#e7eae4",
    "checkedAt": "2026-11-04"
  },
  {
    "id": "volvo-xc90",
    "name": "XC90",
    "englishName": "XC90",
    "brand": "볼보",
    "body": "suv",
    "aliases": [],
    "cardCue": "그릴에 비스듬한 선이 있어요.",
    "summary": "커다란 그릴과 반듯한 지붕을 가진 SUV예요.",
    "cues": [
      "앞쪽 그릴에 비스듬한 선이 보여요.",
      "옆에서 보면 지붕이 뒤쪽까지 길게 이어져요."
    ],
    "appearance": {
      "label": "2024 XC90 B6 인스크립션 · 필리핀 촬영",
      "change": "verified"
    },
    "sourceUrl": "https://www.volvocars.com/files/cs/v3/assets/blt0feaa88e629251fc/blta90742729d52bc58/66ec72e25794517833997e0b/xc90-my24-brochure.pdf?branch=prod_alias",
    "tile": "#e7eae4",
    "checkedAt": "2026-11-04"
  },
  {
    "id": "subaru-forester",
    "name": "포레스터",
    "englishName": "Forester",
    "brand": "스바루",
    "body": "suv",
    "aliases": [
      "포레스터 스포츠"
    ],
    "cardCue": "앞쪽의 별 모양 표지를 찾아봐요.",
    "summary": "큼직한 창문과 반듯한 지붕을 가진 SUV예요.",
    "cues": [
      "앞쪽 그릴 한가운데 별 모양 표지가 보여요.",
      "지붕 위에는 짐을 올릴 수 있는 막대가 있어요."
    ],
    "appearance": {
      "label": "2023 포레스터 Sport SK · 미국 사양",
      "change": "verified"
    },
    "sourceUrl": "https://www.subaru.com/content/dam/subaru/downloads/pdf/brochures/2023/forester/MY23_Forester_Brochure.pdf",
    "tile": "#e7eae4",
    "checkedAt": "2026-11-04"
  },
  {
    "id": "lexus-es",
    "name": "ES",
    "englishName": "ES",
    "brand": "렉서스",
    "body": "sedan",
    "aliases": [],
    "cardCue": "모래시계처럼 생긴 그릴을 찾아봐요.",
    "summary": "낮고 길쭉한 모습의 세단이에요.",
    "cues": [
      "앞쪽에 모래시계를 닮은 큰 그릴이 있어요.",
      "가늘고 긴 앞등이 옆으로 뻗어 있어요."
    ],
    "appearance": {
      "label": "2022 ES 350 · 7세대 부분변경 · 필리핀 촬영",
      "change": "verified"
    },
    "sourceUrl": "https://pressroom.lexus.com/2022-lexus-es-the-quintessential-luxury-sedan-is-refreshed-inside-and-out/",
    "tile": "#e7eae4",
    "checkedAt": "2026-11-04"
  },
  {
    "id": "volkswagen-passat",
    "name": "파사트",
    "englishName": "Passat",
    "brand": "폭스바겐",
    "body": "sedan",
    "aliases": [],
    "cardCue": "가로줄이 많은 그릴을 찾아봐요.",
    "summary": "길고 반듯한 모습의 세단이에요.",
    "cues": [
      "앞쪽 그릴에 가로줄이 여러 개 있어요.",
      "지붕이 뒤쪽으로 부드럽게 내려가요."
    ],
    "appearance": {
      "label": "2021 파사트 Highline · 북미형 캐나다 촬영",
      "change": "verified"
    },
    "sourceUrl": "https://www.volkswagen-newsroom.com/en/passat-usa-version-3624",
    "tile": "#e7eae4",
    "checkedAt": "2026-11-04"
  },
  {
    "id": "vacuum-sewer-truck",
    "name": "하수관 진공청소차",
    "englishName": "Vacuum Sewer Truck",
    "body": "road",
    "aliases": [
      "하수도 청소차",
      "하수관 청소차",
      "진공흡입차",
      "하수관 제트청소차"
    ],
    "cardCue": "굵은 호스로 하수관의 찌꺼기를 빨아들여요.",
    "summary": "맨홀과 하수관을 청소하는 특수 트럭이에요. 물을 세게 뿜어 찌꺼기를 풀고 진공 호스로 빨아 탱크에 모으는 종류도 있어요.",
    "cues": [
      "차 뒤나 위에 굵은 진공 호스와 감개가 보여요.",
      "큰 탱크와 호스를 맨홀 가까이 내려 작업해요."
    ],
    "sourceUrl": "https://www.aquatechinc.com/products/b12/",
    "tile": "#e8eceb",
    "appearance": {
      "label": "하수관 진공청소차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-04"
  },
  {
    "id": "milk-tanker-truck",
    "name": "우유 탱크차",
    "englishName": "Milk Tanker Truck",
    "body": "road",
    "aliases": [
      "우유 수거 탱크차",
      "원유 탱크차",
      "밀크 탱크 트럭"
    ],
    "cardCue": "농장의 우유를 차가운 탱크에 실어 나른답니다.",
    "summary": "농장에서 모은 원유를 유제품 공장으로 운반하는 탱크 트럭이에요. 음식과 닿는 탱크는 위생과 온도 유지에 맞게 만들어요.",
    "cues": [
      "트럭 뒤에 길고 둥근 금속 탱크가 실려 있어요.",
      "탱크차는 우유를 농장에서 유제품 공장까지 옮겨요."
    ],
    "sourceUrl": "https://carrick-engineering.com/milk-collection-tanker/",
    "tile": "#e9ecee",
    "appearance": {
      "label": "우유 탱크차의 구조와 하는 일 · 사진은 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-04"
  },
  {
    "id": "aerial-work-platform-truck",
    "name": "고소작업차",
    "englishName": "Truck-mounted Aerial Work Platform",
    "body": "road",
    "aliases": [
      "이동식 고소작업차",
      "바구니차",
      "고소작업 트럭",
      "버킷 트럭"
    ],
    "cardCue": "붐 끝의 바구니를 높이 올려 일을 해요.",
    "summary": "높은 곳에서 수리할 때 바구니에 사람을 올려 주는 트럭이에요.",
    "cues": [
      "트럭 위에 접히거나 뻗는 긴 붐이 있어요.",
      "붐 끝에는 작업자가 설 수 있는 바구니가 달려요."
    ],
    "sourceUrl": "https://www.palfinger.com/gb/en/our-products/aerial-platforms/aerial-work-platforms.html",
    "tile": "#e8eceb",
    "appearance": {
      "label": "트럭 탑재 고소작업차 · 사진은 러시아 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-04"
  },
  {
    "id": "road-marking-truck",
    "name": "도로 차선 도색차",
    "englishName": "Road Marking Truck",
    "body": "road",
    "aliases": [
      "노면 표시차",
      "차선 도색 트럭",
      "도로 라인마킹차"
    ],
    "cardCue": "도로 위에 새 차선과 표시를 그려요.",
    "summary": "도로 공사 구간에서 페인트나 녹인 도료로 차선과 글자, 기호를 그리는 작업차예요. 뒤쪽 도색 장치가 노면 가까이에서 움직여요.",
    "cues": [
      "트럭 뒤에 도료통과 노면 가까운 분사·도색 장치가 있어요.",
      "차가 움직이며 도로 위에 표시를 그려요."
    ],
    "sourceUrl": "https://trysilrmm.com/products/",
    "tile": "#ecece8",
    "appearance": {
      "label": "도로 차선 도색차 · 사진은 GAZ 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-04"
  },
  {
    "id": "railway-tamping-machine",
    "name": "철도 선로 다짐차",
    "englishName": "Railway Tamping Machine",
    "body": "rail",
    "aliases": [
      "철도 보선차",
      "선로 다짐 기계",
      "철도 궤도 정비차",
      "탬핑 머신"
    ],
    "cardCue": "레일 아래 자갈을 다져 선로를 바로잡아요.",
    "summary": "철도 선로를 정비하는 보선 차량이에요. 레일을 들어 위치를 맞추고, 침목 아래의 자갈을 다져 선로를 안정시켜요.",
    "cues": [
      "철로 위를 달릴 수 있는 바퀴와 긴 작업 차량이 보여요.",
      "차량 아래의 장치가 침목 주변 자갈을 다지는 일을 해요."
    ],
    "sourceUrl": "https://www.plassertheurer.com/en/machine/track-tamping-machines/overview",
    "tile": "#eee7dc",
    "appearance": {
      "label": "ColasRail Saturn 선로 다짐 보선차 · 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-04"
  },
  {
    "id": "airport-hydrant-dispenser",
    "name": "공항 급유차",
    "englishName": "Aircraft Hydrant Dispenser",
    "body": "road",
    "aliases": [
      "항공기 급유 디스펜서",
      "하이드런트 디스펜서",
      "공항 연료 디스펜서"
    ],
    "cardCue": "공항 지하 연료관과 비행기를 호스로 이어요.",
    "summary": "공항 지하 연료관에서 받은 연료를 연결 장치와 호스로 비행기에 보내는 차예요.",
    "cues": [
      "호스 감개와 급유 장치가 보여요.",
      "지하 급유관과 비행기 사이에서 연료를 보내요."
    ],
    "sourceUrl": "https://www.atcomex.eu/aircraft-refuelling/",
    "tile": "#e7eceb",
    "appearance": {
      "label": "탱크 없는 공항 급유 장비 · 하이드런트 디스펜서로 판단한 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-04"
  },
  {
    "id": "airport-catering-truck",
    "name": "공항 기내식 공급차",
    "englishName": "Aircraft Catering Highloader",
    "body": "road",
    "aliases": [
      "기내식 트럭",
      "항공기 식품 공급차",
      "공항 케이터링 하이로더"
    ],
    "cardCue": "적재함을 올려 비행기에 음식을 실어요.",
    "summary": "공항에서 기내식과 음료를 싣고, 승강식 적재함을 비행기 문 높이에 맞춰 음식을 옮기는 서비스 트럭이에요.",
    "cues": [
      "운전실 뒤에 큰 상자형 적재함이 있어요.",
      "가위처럼 펴지는 받침이 상자를 비행기 문 높이까지 들어 올려요."
    ],
    "sourceUrl": "https://www.doll-airport.com/en/catering-highloader.html",
    "tile": "#e9ecee",
    "appearance": {
      "label": "공항 기내식 공급차 · Goldair Handling 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-04"
  },
  {
    "id": "airport-stair-truck",
    "name": "공항 탑승 계단차",
    "englishName": "Aircraft Passenger Stair Truck",
    "body": "road",
    "aliases": [
      "항공기 탑승 계단차",
      "계단차",
      "스테어카",
      "이동식 탑승 계단"
    ],
    "cardCue": "차 위의 계단으로 비행기에 오르내려요.",
    "summary": "터미널 탑승교를 쓰지 않는 곳에서 비행기 문까지 승객이 오르내리도록 계단을 들어 올리는 공항 서비스 차량이에요.",
    "cues": [
      "바퀴 달린 차 위에 긴 계단이 있어요.",
      "계단의 높은 쪽이 비행기 문 높이에 맞춰져요."
    ],
    "sourceUrl": "https://milesgse.com/passenger-stairs",
    "tile": "#e8eceb",
    "appearance": {
      "label": "공항 탑승 계단차 · Air China 실물 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-04"
  },
  {
    "id": "soil-stabilizer",
    "name": "토질 안정기",
    "englishName": "Soil Stabilizer",
    "body": "special",
    "aliases": [
      "토양 안정기",
      "도로 재생기",
      "soil recycler"
    ],
    "cardCue": "흙을 섞어 단단한 길의 바탕을 만들어요.",
    "summary": "흙에 재료를 섞어 길을 만들기 좋은 바탕으로 바꿔요.",
    "cues": [
      "커다란 바퀴와 낮은 몸이 보여요.",
      "몸 아래에 흙을 섞는 장치가 숨어 있어요."
    ],
    "appearance": {
      "label": "토질 안정기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://www.wirtgen-group.com/en-de/products/wirtgen/technologies/recycling-and-soil-stabilisation/soil-stabilisation-wr-series/",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "vacuum-excavator-truck",
    "name": "흡입 굴착차",
    "englishName": "Vacuum Excavator Truck",
    "body": "special",
    "aliases": [
      "진공 굴착차",
      "흡입 굴착기"
    ],
    "cardCue": "굵은 호스로 흙을 빨아 모아요.",
    "summary": "진공의 힘으로 흙이나 자갈을 빨아들여 땅을 파는 트럭이에요.",
    "cues": [
      "커다란 수거통을 트럭 위에 실어요.",
      "작업할 때는 굵은 흡입 호스를 사용해요."
    ],
    "appearance": {
      "label": "흡입 굴착차의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://protips.vermeer.com/underground/2023/03/16/vacuum-excavators-help-maryville-expand-and-maintain-underground-infrastructure/",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "chip-spreader",
    "name": "자갈 살포기",
    "englishName": "Chip Spreader",
    "body": "special",
    "aliases": [
      "골재 살포기",
      "칩 스프레더"
    ],
    "cardCue": "작은 돌을 길 위에 골고루 뿌려요.",
    "summary": "도로 표면에 작은 돌을 일정한 양으로 뿌려요.",
    "cues": [
      "길고 낮은 차체에 큰 바퀴가 있어요.",
      "돌을 받거나 뿌리는 넓은 통이 달려 있어요."
    ],
    "appearance": {
      "label": "자갈 살포기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://etnyre.com/chipspreaders/",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "mobile-rock-crusher",
    "name": "이동식 쇄석기",
    "englishName": "Mobile Rock Crusher",
    "body": "special",
    "aliases": [
      "이동식 파쇄기",
      "자주식 쇄석기"
    ],
    "cardCue": "큰 돌을 작은 돌로 부숴요.",
    "summary": "공사장이나 채석장에서 큰 돌을 작은 돌로 부수고 띠로 옮겨요.",
    "cues": [
      "아래에 무한궤도가 있어요.",
      "부순 돌을 옮기는 긴 띠가 뻗어 있어요."
    ],
    "appearance": {
      "label": "이동식 쇄석기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://www.metso.com/portfolio/lokotrack-lt-series/",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "concrete-slipform-paver",
    "name": "콘크리트 슬립폼 포장기",
    "englishName": "Concrete Slipform Paver",
    "body": "special",
    "aliases": [
      "콘크리트 포장기",
      "슬립폼 피니셔"
    ],
    "cardCue": "젖은 콘크리트를 길게 고르게 만들어요.",
    "summary": "콘크리트를 펴고 일정한 모양으로 다듬어 도로를 만들어요.",
    "cues": [
      "차체 아래에 넓은 포장 장치가 있어요.",
      "무한궤도로 천천히 움직이는 장비도 있어요."
    ],
    "appearance": {
      "label": "콘크리트 슬립폼 포장기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://www.gomaco.com/Resources/gp4_paver.html",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "asphalt-transfer-vehicle",
    "name": "아스팔트 이송차",
    "englishName": "Asphalt Material Transfer Vehicle",
    "body": "special",
    "aliases": [
      "아스팔트 재료 이송차",
      "셔틀 버기"
    ],
    "cardCue": "포장기에 재료를 건네줘요.",
    "summary": "아스팔트 재료를 받아 포장기 쪽으로 옮겨서 도로 포장을 도와요.",
    "cues": [
      "몸 위에 재료를 옮기는 긴 띠가 있어요.",
      "작업할 때 포장기 옆에서 재료를 건네줘요."
    ],
    "appearance": {
      "label": "아스팔트 이송차의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://astecindustries.com/product/roadtec-sb-2500-shuttle-buggy-material-transfer-vehicle/",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "mobile-screening-plant",
    "name": "이동식 체질기",
    "englishName": "Mobile Screening Plant",
    "body": "special",
    "aliases": [
      "이동식 선별기",
      "골재 선별기"
    ],
    "cardCue": "돌과 모래를 크기별로 나눠요.",
    "summary": "흙과 작은 돌을 체로 걸러 크기별로 나누는 장비예요.",
    "cues": [
      "비스듬한 체 상자가 보여요.",
      "나눈 재료를 옮기는 긴 띠가 있어요."
    ],
    "appearance": {
      "label": "이동식 체질기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://www.powerscreen.com/en/products/screening",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "skidder",
    "name": "스키더",
    "englishName": "Skidder",
    "body": "special",
    "aliases": [
      "통나무 끄는 차",
      "스키더",
      "집재기"
    ],
    "cardCue": "통나무를 잡아 숲길로 끌고 나와요.",
    "summary": "숲에서 자른 통나무를 집게나 줄로 잡아 모아 둔 곳까지 끌고 가요.",
    "cues": [
      "뒤쪽에 통나무를 잡는 장치가 있어요.",
      "울퉁불퉁한 숲길을 가는 큰 바퀴를 살펴봐요."
    ],
    "sourceUrl": "https://www.hsm-forest.net/en/",
    "tile": "#e7ebed",
    "appearance": {
      "label": "스키더의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "feller-buncher",
    "name": "벌목 집재기",
    "englishName": "Feller-buncher",
    "body": "special",
    "aliases": [
      "펠러 번처",
      "나무 베는 장비"
    ],
    "cardCue": "나무를 잡고 밑동을 잘라 모아요.",
    "summary": "긴 팔 끝의 장치로 서 있는 나무를 잡아 밑동을 자르고, 여러 그루를 모아 내려놔요.",
    "cues": [
      "긴 팔 끝에 나무를 잡는 장치가 있어요.",
      "사진 속 장비는 넓은 궤도로 움직여요."
    ],
    "sourceUrl": "https://www.deere.com/en/forestry/",
    "tile": "#e7ebed",
    "appearance": {
      "label": "벌목 집재기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "wood-chipper",
    "name": "목재 파쇄기",
    "englishName": "Wood chipper",
    "body": "special",
    "aliases": [
      "우드 치퍼",
      "나무 파쇄기"
    ],
    "cardCue": "나무를 작은 조각으로 잘라요.",
    "summary": "나무와 가지를 받아 잘게 자르고, 작은 나무 조각을 관으로 내보내요.",
    "cues": [
      "사진에서는 집게 달린 팔로 나무를 옮겨요.",
      "가늘고 긴 배출관 끝을 찾아봐요."
    ],
    "sourceUrl": "https://www.vermeer.com/na/brush-chippers",
    "tile": "#e7ebed",
    "appearance": {
      "label": "목재 파쇄기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "forage-harvester",
    "name": "사료작물 수확기",
    "englishName": "Forage harvester",
    "body": "farm",
    "aliases": [
      "사료 수확기",
      "포리지 하베스터"
    ],
    "cardCue": "작물을 잘게 썰어 옆 차에 실어요.",
    "summary": "풀이나 옥수수 같은 작물을 잘게 썰어 높은 관으로 옆에 있는 적재함에 보내요.",
    "cues": [
      "앞쪽에 작물을 받아들이는 장치가 있어요.",
      "위로 굽은 관이 옆 적재함을 향해요."
    ],
    "sourceUrl": "https://www.claas.com/en-gb/agricultural-machinery/forage-harvesters",
    "tile": "#e7ebed",
    "appearance": {
      "label": "사료작물 수확기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "round-baler",
    "name": "원형 베일러",
    "englishName": "Round baler",
    "body": "farm",
    "aliases": [
      "원형 결속기",
      "건초 압축기",
      "원형 곤포기"
    ],
    "cardCue": "마른 풀을 둥근 덩이로 말아요.",
    "summary": "트랙터가 끌고 가는 동안 마른 풀이나 볏짚을 모아 큰 원통 모양으로 말아 묶어요.",
    "cues": [
      "앞에 트랙터에 연결하는 부분이 있어요.",
      "뒤쪽 문이 열리면 둥근 덩이가 나와요."
    ],
    "sourceUrl": "https://www.krone-agriculture.com/en/products/round-balers",
    "tile": "#e7ebed",
    "appearance": {
      "label": "원형 베일러의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "ice-resurfacer",
    "name": "얼음 정빙차",
    "englishName": "Ice resurfacer",
    "body": "special",
    "aliases": [
      "정빙기",
      "빙판 정리차",
      "잠보니",
      "잼보니"
    ],
    "cardCue": "스케이트장 얼음을 매끈하게 만들어요.",
    "summary": "울퉁불퉁한 얼음을 얇게 깎고, 물을 얇게 펴서 다시 매끈한 빙판을 만들어요.",
    "cues": [
      "뒤쪽에 얼음에 닿는 넓은 장치가 있어요.",
      "차가 지나간 자리의 반짝이는 얼음을 봐요."
    ],
    "sourceUrl": "https://zamboni.com/about/frequently-asked-questions-2/",
    "tile": "#e7ebed",
    "appearance": {
      "label": "얼음 정빙차의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "forwarder",
    "name": "통나무 운반차 포워더",
    "englishName": "Forwarder",
    "body": "special",
    "aliases": [
      "포워더",
      "원목 운반차",
      "산림 운반차"
    ],
    "cardCue": "자른 통나무를 자기 짐칸에 실어요.",
    "summary": "숲에서 자른 통나무를 긴 팔의 집게로 들어 짐칸에 싣고 나와요.",
    "cues": [
      "짐칸 양쪽에 통나무를 받치는 기둥이 있어요.",
      "긴 팔과 집게가 어디에 달렸는지 살펴봐요."
    ],
    "sourceUrl": "https://ponsse.jp/forwarder/forwarder-buffalo/",
    "tile": "#e7ebed",
    "appearance": {
      "label": "통나무 운반차 포워더의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "potato-harvester",
    "name": "감자 수확기",
    "englishName": "Potato harvester",
    "body": "farm",
    "aliases": [
      "감자 캐는 기계",
      "감자 굴취기"
    ],
    "cardCue": "흙 속에서 감자를 캐어 모아요.",
    "summary": "밭에서 감자와 흙을 함께 들어 올리고, 흙을 털어 감자를 모아요.",
    "cues": [
      "밭 가까이에 감자를 캐는 장치가 있어요.",
      "감자를 모으는 큼직한 짐칸을 살펴봐요."
    ],
    "sourceUrl": "https://avr.be/sites/default/files/2019-12/HARV_Puma4.0_BROCH_19_GB_LR_0.pdf",
    "tile": "#e7ebed",
    "appearance": {
      "label": "감자 수확기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "railway-rotary-snowplow",
    "name": "철도 회전식 제설차",
    "englishName": "Railway rotary snowplow",
    "body": "rail",
    "aliases": [
      "로터리 제설차",
      "철도 제설기",
      "회전식 제설기"
    ],
    "cardCue": "큰 회전날로 철길의 눈을 날려요.",
    "summary": "철길 앞에 쌓인 눈을 커다란 회전날로 퍼 올려 선로 옆으로 내보내요.",
    "cues": [
      "기차 앞의 커다란 원 안에 날이 줄지어 있어요.",
      "회전날 위쪽에 눈이 나가는 통로가 있어요."
    ],
    "sourceUrl": "https://albertarailwaymuseum.com/snowplows/",
    "tile": "#e7ebed",
    "appearance": {
      "label": "철도 회전식 제설차의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "rice-transplanter",
    "name": "이앙기",
    "englishName": "Rice transplanter",
    "body": "farm",
    "aliases": [
      "모내기 기계",
      "모 심는 차"
    ],
    "cardCue": "어린 벼를 논에 줄 맞춰 심어요.",
    "summary": "모판의 어린 벼를 조금씩 집어 물이 있는 논에 일정한 간격으로 옮겨 심어요.",
    "cues": [
      "뒤쪽의 모판을 올리는 자리를 찾아봐요.",
      "논바닥 가까이에서 모를 심는 장치가 움직여요."
    ],
    "sourceUrl": "https://www.kubota.com/innovation/our-stories/automated-transplanter.html",
    "tile": "#e7ebed",
    "appearance": {
      "label": "이앙기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "sugarcane-harvester",
    "name": "사탕수수 수확기",
    "englishName": "Sugarcane harvester",
    "body": "farm",
    "aliases": [
      "사탕수수 베는 차"
    ],
    "cardCue": "긴 사탕수수 줄기를 잘라 실어요.",
    "summary": "긴 줄기를 밑에서 베고 짧게 잘라, 높이 뻗은 운반 장치로 옆 차에 실어요.",
    "cues": [
      "땅 가까이에 줄기를 모으는 장치가 있어요.",
      "위로 뻗은 배출 장치와 옆 차를 찾아봐요."
    ],
    "sourceUrl": "https://www.caseih.com/en-us/unitedstates/products/harvesting/austoft-cane-harvesters",
    "tile": "#e7ebed",
    "appearance": {
      "label": "사탕수수 수확기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "sugar-beet-harvester",
    "name": "사탕무 수확기",
    "englishName": "Sugar beet harvester",
    "body": "farm",
    "aliases": [
      "사탕무 캐는 기계",
      "비트 수확기"
    ],
    "cardCue": "땅속 사탕무 뿌리를 뽑아 모아요.",
    "summary": "흙 속에서 사탕무 뿌리를 들어 올리고 흙을 털어 큰 통에 모아요.",
    "cues": [
      "땅 가까이에서 뿌리를 들어 올리는 부분이 있어요.",
      "사진에서는 트랙터가 수확기를 끌어요."
    ],
    "sourceUrl": "https://www.holmer-maschinenbau.com/en/products/terra-dos",
    "tile": "#e7ebed",
    "appearance": {
      "label": "사탕무 수확기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "self-propelled-sprayer",
    "name": "자주식 농업 분무기",
    "englishName": "Self-propelled field sprayer",
    "body": "farm",
    "aliases": [
      "농업용 살포기",
      "밭 분무차",
      "자주식 방제기"
    ],
    "cardCue": "긴 팔을 펴서 밭에 고르게 뿌려요.",
    "summary": "밭을 지나가며 양쪽으로 긴 팔을 펴고, 팔 아래의 작은 분사구로 필요한 액체를 고르게 뿌려요.",
    "cues": [
      "작물 위를 지나도록 몸이 높아요.",
      "도로에서는 접어 두는 긴 팔을 찾아봐요."
    ],
    "sourceUrl": "https://hardi.com/en/sprayers/self-propelled",
    "tile": "#e7ebed",
    "appearance": {
      "label": "자주식 농업 분무기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "rail-grinder",
    "name": "레일 연마차",
    "englishName": "Rail Grinder",
    "body": "rail",
    "aliases": [
      "궤도 연마차",
      "레일 연삭차",
      "철도 연마차"
    ],
    "cardCue": "레일 윗면을 갈아 고르게 다듬어요.",
    "summary": "철길 위를 천천히 움직이며 레일 윗면의 울퉁불퉁한 부분을 갈아 줘요.",
    "cues": [
      "열차처럼 철길을 따라 움직여요.",
      "차체 아래 연마 장치가 레일 윗면에 닿아요."
    ],
    "sourceUrl": "https://loram.com/maintenance-of-way/rail-maintenance/specialty-rail-grinding/rgs/",
    "tile": "#e9eadc",
    "appearance": {
      "label": "레일 연마차의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "ballast-cleaner",
    "name": "철길 자갈 선별차",
    "englishName": "Ballast Cleaning Machine",
    "body": "rail",
    "aliases": [
      "도상 자갈 청소차",
      "밸러스트 클리너",
      "도상 갱환기"
    ],
    "cardCue": "자갈을 걸러 다시 써요.",
    "summary": "레일 아래 자갈을 퍼 올려 흙과 작은 부스러기를 거르고, 쓸 만한 자갈을 철길에 돌려줘요.",
    "cues": [
      "긴 운반띠가 자갈을 옮겨요.",
      "자갈을 거르는 장치가 몸 가운데에 있어요."
    ],
    "sourceUrl": "https://www.plassertheurer.com/en/machine/technologies/ballast-bed-cleaning/ballast-cleaning-machines/plasser-screenliner-5220-n-p-t",
    "tile": "#e9eadc",
    "appearance": {
      "label": "철길 자갈 선별차의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "road-rail-excavator",
    "name": "철길도 달리는 굴착기",
    "englishName": "Road-Rail Excavator",
    "body": "special",
    "aliases": [
      "궤도 굴착기",
      "도로 철도 겸용 굴착기",
      "투웨이 굴착기"
    ],
    "cardCue": "고무 바퀴와 철길 바퀴가 있어요.",
    "summary": "고무 바퀴로 땅을 다니고, 작은 철제 바퀴를 내려 철길 위에서도 작업해요.",
    "cues": [
      "차체 양쪽 끝의 작은 철제 바퀴를 찾아봐요.",
      "긴 팔 끝에 바가지 같은 작업 도구를 달아요."
    ],
    "sourceUrl": "https://www.hitachicm.com/eu/en/press-center/sas-besnier-relies-on-versatility-and-reliability-of-hitachi-fleet/",
    "tile": "#e9eadc",
    "appearance": {
      "label": "철길도 달리는 굴착기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "ballast-regulator",
    "name": "철길 자갈 고름차",
    "englishName": "Ballast Regulator",
    "body": "rail",
    "aliases": [
      "도상 정리차",
      "자갈 정리차",
      "밸러스트 레귤레이터"
    ],
    "cardCue": "철길 가장자리의 자갈을 고르게 펴요.",
    "summary": "날로 자갈을 필요한 곳에 옮기고, 솔을 단 장비는 침목 위의 남은 자갈을 쓸어요.",
    "cues": [
      "레일 가까이에 자갈을 미는 날이 있어요.",
      "차체 아래 작업 장치가 철길 가까이에 있어요."
    ],
    "sourceUrl": "https://www.plassertheurer.com/en/machine/ballast-distributing-and-profiling/overview",
    "tile": "#e9eadc",
    "appearance": {
      "label": "철길 자갈 고름차의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "rocket-crawler-transporter",
    "name": "로켓 궤도 운반차",
    "englishName": "Crawler-Transporter",
    "body": "special",
    "aliases": [
      "크롤러 트랜스포터",
      "나사 로켓 운반차",
      "크롤러 운반차"
    ],
    "cardCue": "로켓을 발사장으로 천천히 옮겨요.",
    "summary": "조립 건물에서 발사장까지, 이동식 발사대와 그 위의 로켓을 넓은 궤도로 옮겨요.",
    "cues": [
      "모서리마다 넓은 궤도 한 쌍이 있어요.",
      "로켓과 발사대를 받치는 넓고 낮은 몸을 살펴봐요."
    ],
    "sourceUrl": "https://www.nasa.gov/humans-in-space/exploration-ground-systems/the-crawlers/",
    "tile": "#e9eadc",
    "appearance": {
      "label": "로켓 궤도 운반차의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "track-laying-machine",
    "name": "철길 놓는 차",
    "englishName": "Track-Laying Machine",
    "body": "rail",
    "aliases": [
      "궤도 부설기",
      "선로 부설기",
      "철도 부설 장비"
    ],
    "cardCue": "침목을 나란히 놓고 레일을 이어요.",
    "summary": "침목을 일정한 간격으로 놓고 그 위에 두 줄의 레일을 올려 새 철길을 만들어요.",
    "cues": [
      "차체가 길어서 작업 장치가 여러 곳에 있어요.",
      "침목과 레일을 놓는 장치는 차량 아래쪽에 있어요."
    ],
    "sourceUrl": "https://technology.plassertheurer.com/en/gleisumbau/ablauf-gleisumbau",
    "tile": "#e9eadc",
    "appearance": {
      "label": "철길 놓는 차의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "spmt",
    "summary": "여러 개의 조향 바퀴 모듈을 나란히 연결해 다리 조각이나 아주 무거운 장비를 옮겨요.",
    "name": "자주식 모듈 운반차",
    "cues": [
      "낮고 긴 받침대 아래에 바퀴가 많이 달려 있어요.",
      "무거운 구조물을 받쳐 천천히 옮겨요."
    ],
    "tile": "#e9dfd5",
    "englishName": "Self-Propelled Modular Transporter",
    "body": "special",
    "sourceUrl": "https://www.mammoet.com/equipment/transport/self-propelled-modular-transporter/spmt/",
    "cardCue": "커다란 짐을 여러 바퀴로 나눠 실어요.",
    "aliases": [
      "SPMT",
      "다축 모듈 운반차"
    ],
    "appearance": {
      "label": "자주식 모듈 운반차의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "underground-mining-loader",
    "summary": "천장이 낮은 지하 광산에서 앞의 큰 바가지로 돌을 퍼 담아 가까운 곳에 옮겨요.",
    "name": "지하 광산용 로더",
    "cues": [
      "앞쪽에 큰 버킷이 달려 있어요.",
      "가운데가 꺾이는 낮고 튼튼한 차체예요."
    ],
    "tile": "#e8d9cd",
    "englishName": "Underground LHD Loader",
    "body": "special",
    "sourceUrl": "https://www.mining.sandvik/en/products/equipment/loaders/lh517i-underground-lhd/",
    "cardCue": "낮은 갱도에서 광석을 퍼 날라요.",
    "aliases": [
      "LHD",
      "스쿱트램",
      "광산용 적재 운반차"
    ],
    "appearance": {
      "label": "지하 광산용 로더의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "electric-rope-shovel",
    "summary": "노천 광산에서 케이블로 움직이는 큰 삽으로 흙과 광석을 퍼 대형 광산 트럭에 실어요.",
    "name": "전기 로프 셔블",
    "cues": [
      "높이 솟은 붐에 여러 줄이 이어져 있어요.",
      "앞에 커다란 강철 삽이 달려 있어요."
    ],
    "tile": "#e6ddc8",
    "englishName": "Electric Rope Shovel",
    "body": "special",
    "sourceUrl": "https://www.komatsu.com/en-za/products/equipment/electric-rope-shovels/4100xpc-ac",
    "cardCue": "큰 삽으로 광석을 퍼 올려요.",
    "aliases": [
      "전기 로프 삽",
      "광산용 전기 셔블"
    ],
    "appearance": {
      "label": "전기 로프 셔블의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "mining-blast-hole-drill",
    "summary": "노천 광산의 바위 층에 긴 구멍을 뚫어 채굴 작업을 준비하는 궤도식 장비예요.",
    "name": "노천 광산용 천공기",
    "cues": [
      "차체 위에 아주 긴 드릴 마스트가 서 있어요.",
      "바위가 계단처럼 깎인 채굴장에서 일해요."
    ],
    "tile": "#e3dfcf",
    "englishName": "Surface Mining Blast-Hole Drill",
    "body": "special",
    "sourceUrl": "https://www.epiroc.com/en-cd/products/drill-rigs/surface-blasthole-drill-rigs/dml",
    "cardCue": "긴 드릴로 바위에 구멍을 뚫어요.",
    "aliases": [
      "광산 천공기",
      "발파 구멍 굴착기"
    ],
    "appearance": {
      "label": "노천 광산용 천공기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "ship-unloader",
    "summary": "화물선에 실린 석탄이나 광석 같은 벌크 화물을 집어 올려 육지의 컨베이어 쪽으로 보내요.",
    "name": "벌크선 하역기",
    "cues": [
      "부두 위에 큰 붐과 컨베이어가 이어져 있어요.",
      "배에서 화물을 내리는 항만 장비예요."
    ],
    "tile": "#dce5e4",
    "englishName": "Bulk Ship Unloader",
    "body": "special",
    "sourceUrl": "https://www.takraf.com/portfolio/detail/ship-unloader/",
    "cardCue": "배에 실린 원료를 육지로 옮겨요.",
    "aliases": [
      "선박 하역기",
      "벌크 하역 장치"
    ],
    "appearance": {
      "label": "벌크선 하역기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "ship-loader",
    "summary": "육지의 컨베이어에서 곡물이나 광석을 받아 배 안으로 보내는 항만 장비예요.",
    "name": "벌크선 선적기",
    "cues": [
      "부두에서 바다 쪽으로 긴 팔이 뻗어 있어요.",
      "팔 끝에 화물을 배 안으로 보내는 통로가 있어요."
    ],
    "tile": "#dce3e8",
    "englishName": "Bulk Ship Loader",
    "body": "special",
    "sourceUrl": "https://www.takraf.com/portfolio/detail/ship-loaders/",
    "cardCue": "컨베이어로 화물을 배에 실어요.",
    "aliases": [
      "선박 선적기",
      "항만 벌크 선적기"
    ],
    "appearance": {
      "label": "벌크선 선적기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "stacker-reclaimer",
    "summary": "운반띠로 돌 같은 원료를 가져와 큰 더미를 만들어요. 다시 쓸 때는 더미에서 원료를 모아 운반띠로 보내요.",
    "name": "스태커 리클레이머",
    "cues": [
      "커다란 실내에 원료 더미가 있어요.",
      "더미 옆의 긴 틀과 운반 장치를 살펴봐요."
    ],
    "tile": "#e0dfd3",
    "englishName": "Stacker-Reclaimer",
    "body": "special",
    "sourceUrl": "https://www.takraf.com/portfolio/detail/scraper-reclaimers/",
    "cardCue": "원료를 쌓고 필요할 때 다시 옮겨요.",
    "aliases": [
      "벌크 적치·회수기",
      "스태커 리클레이머"
    ],
    "appearance": {
      "label": "스태커 리클레이머의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "crawler-carrier",
    "summary": "고무 궤도가 넓게 땅을 디뎌 질퍽하거나 울퉁불퉁한 곳에서 자재를 옮겨요.",
    "name": "궤도 운반차",
    "cues": [
      "바퀴 대신 길게 이어진 궤도가 달려 있어요.",
      "뒤쪽 짐칸에 자재를 실을 수 있어요."
    ],
    "tile": "#e4e1d6",
    "englishName": "Crawler Carrier",
    "body": "special",
    "sourceUrl": "https://terramac.com/",
    "cardCue": "무한궤도로 짐을 싣고 가요.",
    "aliases": [
      "궤도식 운반차",
      "크롤러 캐리어",
      "궤도 덤퍼"
    ],
    "appearance": {
      "label": "궤도 운반차의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "landfill-compactor",
    "name": "매립지 압축기",
    "englishName": "Landfill Compactor",
    "body": "special",
    "aliases": [
      "쓰레기 다짐차"
    ],
    "cardCue": "튼튼한 쇠바퀴로 쓰레기를 꾹 눌러요.",
    "summary": "매립지에서 쓰레기를 밀고 눌러 빈 공간을 줄여요.",
    "cues": [
      "바퀴에 뾰족한 돌기가 있어요.",
      "앞쪽에 쓰레기를 미는 넓은 판이 있어요."
    ],
    "appearance": {
      "label": "매립지 압축기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://parts.cat.com/en/catcorp/product/602-1175",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "barrier-transfer-machine",
    "name": "도로 방호벽 이동차",
    "englishName": "Barrier Transfer Machine",
    "body": "special",
    "aliases": [
      "도로 지퍼차",
      "차로 분리대 이동차"
    ],
    "cardCue": "도로의 방호벽을 옆으로 옮겨요.",
    "summary": "길게 이어진 방호벽을 옆으로 옮겨 차로의 위치를 바꿔요.",
    "cues": [
      "길고 네모난 몸 양끝에 운전실이 있어요.",
      "아래쪽으로 이어진 방호벽을 옮겨요."
    ],
    "appearance": {
      "label": "도로 방호벽 이동차의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://www.lindsay.com/DownloadFile.ashx?id=0a56e1eb-4aab-46f3-aa15-a23167c75cc8",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "high-reach-demolition-excavator",
    "name": "고층 해체 굴착기",
    "englishName": "High-Reach Demolition Excavator",
    "body": "special",
    "aliases": [
      "긴팔 해체 굴착기"
    ],
    "cardCue": "아주 긴 팔로 높은 건물을 해체해요.",
    "summary": "긴 팔 끝의 해체 도구로 높은 건물을 조금씩 허물어요.",
    "cues": [
      "무한궤도 위에 아주 긴 팔이 있어요.",
      "팔을 높이 뻗어 높은 곳에 닿을 수 있어요."
    ],
    "appearance": {
      "label": "고층 해체 굴착기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://www.hitachicm.com/eu/en/machinery/excavators/special-applications/demolition-excavators/product.zx600mc-7/",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "horizontal-directional-drill",
    "name": "수평 방향 시추기",
    "englishName": "Horizontal Directional Drill",
    "body": "special",
    "aliases": [
      "수평 굴착기",
      "HDD 시추기"
    ],
    "cardCue": "땅속 옆으로 길을 뚫어요.",
    "summary": "도로를 크게 파헤치지 않고 땅속에 관과 선이 지나갈 길을 뚫어요.",
    "cues": [
      "길쭉한 막대가 차체에 여러 개 놓여 있어요.",
      "막대가 비스듬히 땅속으로 들어가요."
    ],
    "appearance": {
      "label": "수평 방향 시추기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://protips.vermeer.com/underground/2025/08/07/a-beginners-guide-to-horizontal-directional-drilling/",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "crack-sealing-machine",
    "name": "도로 균열 봉합기",
    "englishName": "Crack Sealing Machine",
    "body": "special",
    "aliases": [
      "도로 틈새 메움 장비",
      "균열 봉합 트레일러"
    ],
    "cardCue": "도로의 갈라진 틈을 메워요.",
    "summary": "따뜻하게 녹인 재료로 도로의 갈라진 틈을 메우는 장비예요.",
    "cues": [
      "차에 끌려가는 장비와 호스가 있어요.",
      "재료를 데우는 통이 달려 있어요."
    ],
    "appearance": {
      "label": "도로 균열 봉합기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://crafco.com/equipment/crack-sealing-melters/",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "airport-rescue-fire-truck",
    "name": "공항 구조 소방차",
    "englishName": "Airport Rescue and Fire Fighting Vehicle",
    "body": "road",
    "aliases": [
      "공항 소방차",
      "항공기 구조 소방차",
      "ARFF"
    ],
    "cardCue": "공항에서 비행기와 사람을 도와요.",
    "summary": "공항에서 비행기 사고에 출동해 물이나 거품으로 불을 끄고 구조를 도와요.",
    "cues": [
      "높은 물대포를 단 차도 있어요.",
      "넓은 앞유리와 큰 바퀴를 살펴봐요."
    ],
    "sourceUrl": "https://www.oshkoshairport.com/experience/airport-products-blog/arff-vehicle-turrets-for-fire-suppression",
    "tile": "#e1e7ec",
    "appearance": {
      "label": "공항 구조 소방차의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "airport-cargo-high-loader",
    "name": "공항 화물 승강차",
    "englishName": "Aircraft Cargo High Loader",
    "body": "road",
    "aliases": [
      "공항 화물 리프트",
      "항공 화물 로더",
      "하이로더",
      "공항 팔레트 로더"
    ],
    "cardCue": "넓은 받침대를 올려 비행기에 짐을 실어요.",
    "summary": "큰 화물 상자나 짐판을 넓은 받침대에 놓고 비행기의 화물칸 높이까지 올려요.",
    "cues": [
      "받침대가 평평하고 넓어요.",
      "받침대를 올리는 장치가 그 아래에 있어요."
    ],
    "sourceUrl": "https://trepel.com/wp-content/uploads/2024/06/trepel-brochure.pdf",
    "tile": "#e1e7ec",
    "appearance": {
      "label": "공항 화물 승강차의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "runway-rubber-removal-truck",
    "name": "활주로 고무 제거차",
    "englishName": "Runway Rubber Removal Truck",
    "body": "road",
    "aliases": [
      "활주로 세척차",
      "고무 자국 청소차",
      "활주로 물청소차"
    ],
    "cardCue": "활주로에 붙은 고무 자국을 씻어 내요.",
    "summary": "비행기가 착륙하며 남긴 고무가 활주로에 쌓이면, 센 물줄기를 쓰는 장비로 떼어 내요.",
    "cues": [
      "차 아래 가까이에서 바닥을 청소해요.",
      "물을 쓰는 장치와 큰 차체를 살펴봐요."
    ],
    "sourceUrl": "https://www.airporttech.tc.faa.gov/Airport-Safety/Runway-Surface-Safety-Technology/Rubber-Deposits-Removal",
    "tile": "#e1e7ec",
    "appearance": {
      "label": "활주로 고무 제거차의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "road-rotary-snowblower",
    "name": "도로 회전식 제설차",
    "englishName": "Road Rotary Snow Blower",
    "body": "special",
    "aliases": [
      "로터리 제설차",
      "눈 날리는 차",
      "스노 블로어",
      "회전식 제설기"
    ],
    "cardCue": "눈을 모아 통로로 옆에 날려요.",
    "summary": "길에 쌓인 눈을 앞쪽 회전날로 모으고, 위로 굽은 통로를 통해 옆으로 날려 보내요.",
    "cues": [
      "앞쪽에 돌아가며 눈을 모으는 날이 있어요.",
      "구부러진 통로 끝에서 눈이 나와요."
    ],
    "sourceUrl": "https://www.kahlbacher.com/en/products/road-maintenance-technology/rotating-equipment",
    "tile": "#dfeaf0",
    "appearance": {
      "label": "도로 회전식 제설차의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "carrot-harvester",
    "name": "당근 수확기",
    "englishName": "Carrot harvester",
    "body": "farm",
    "aliases": [
      "당근 캐는 기계"
    ],
    "cardCue": "당근을 땅에서 뽑아 모아요.",
    "summary": "땅을 느슨하게 한 뒤 당근 잎을 붙잡아 뿌리를 들어 올려요.",
    "cues": [
      "앞의 뾰족한 장치가 당근이 심긴 줄을 따라가요.",
      "여러 줄을 한꺼번에 거두는 작업부를 살펴봐요."
    ],
    "sourceUrl": "https://group.grimme.com/en/asa-lift",
    "tile": "#e7ebed",
    "appearance": {
      "label": "당근 수확기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "windrower",
    "name": "윈드로어",
    "englishName": "Windrower",
    "body": "farm",
    "aliases": [
      "풀 베는 차",
      "스와더"
    ],
    "cardCue": "풀을 베어 길게 한 줄로 모아요.",
    "summary": "풀을 베어 바닥에 긴 줄로 놓으면 나중에 모으거나 말려 묶기 쉬워요.",
    "cues": [
      "앞에 넓은 풀 베는 장치가 달려 있어요.",
      "베어 놓은 풀은 바닥에 긴 줄로 남아요."
    ],
    "sourceUrl": "https://www.caseih.com/en-us/unitedstates/products/windrowers",
    "tile": "#e7ebed",
    "appearance": {
      "label": "윈드로어의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "manure-spreader",
    "name": "퇴비 살포기",
    "englishName": "Manure spreader",
    "body": "farm",
    "aliases": [
      "거름 살포기",
      "퇴비 뿌리는 차"
    ],
    "cardCue": "트랙터가 끌고 가며 거름을 뿌려요.",
    "summary": "밭을 지나가면서 큰 통에 담긴 거름을 고르게 펼쳐요.",
    "cues": [
      "트랙터 뒤에 붙은 넓은 적재함을 찾아봐요.",
      "적재함 뒤에 거름을 내보내는 장치가 있어요."
    ],
    "sourceUrl": "https://www.deere.com/en-us/products-solutions/tractors/tractor-attachments-and-implements/ms1108-chain-unloading-manure-spreader-mdgwnfhg",
    "tile": "#e7ebed",
    "appearance": {
      "label": "퇴비 살포기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "corn-planter",
    "name": "옥수수 파종기",
    "englishName": "Corn planter",
    "body": "farm",
    "aliases": [
      "옥수수 심는 기계",
      "씨앗 파종기"
    ],
    "cardCue": "옥수수 씨앗을 여러 줄로 심어요.",
    "summary": "트랙터가 끌고 가면서 여러 개의 작업 장치가 씨앗을 일정한 간격으로 심어요.",
    "cues": [
      "노란 씨앗 통이 나란히 달렸어요.",
      "땅 가까이에 작은 바퀴와 씨앗을 심는 장치가 있어요."
    ],
    "sourceUrl": "https://www.deere.com/en-us/products-solutions/planters",
    "tile": "#e7ebed",
    "appearance": {
      "label": "옥수수 파종기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "tomato-harvester",
    "name": "토마토 수확기",
    "englishName": "Tomato harvester",
    "body": "farm",
    "aliases": [
      "토마토 따는 기계"
    ],
    "cardCue": "토마토를 거둬 운반 띠로 옮겨요.",
    "summary": "토마토 줄기를 거두고 열매를 떼어 모은 뒤 운반 장치로 보내요.",
    "cues": [
      "앞에 토마토 줄기를 받는 장치가 있어요.",
      "기계 앞쪽의 길게 뻗은 운반 띠를 살펴봐요."
    ],
    "sourceUrl": "https://www.oxbo.com/tomato-harvesting/",
    "tile": "#e7ebed",
    "appearance": {
      "label": "토마토 수확기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "summary": "예인선이 끄는 바지선 위 크레인으로 물 위에서 큰 화물과 구조물을 들어 옮겨요.",
    "checkedAt": "2026-11-09",
    "sourceUrl": "https://www.sam.usace.army.mil/Missions/Civil-Works/Navigation/Floating-Plants/RWDavis/",
    "appearance": {
      "label": "부선 크레인의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "body": "special",
    "id": "floating-crane-barge",
    "name": "부선 크레인",
    "aliases": [
      "해상 크레인 바지선",
      "크레인 부선",
      "플로팅 크레인"
    ],
    "cues": [
      "큰 크레인 붐이 바지선 위에 설치돼 있어요.",
      "고리에 매단 화물을 물 위에서 들어 올려요."
    ],
    "tile": "#dce7e8",
    "englishName": "Floating Crane Barge",
    "cardCue": "바지선 위 크레인으로 무거운 짐을 들어요."
  },
  {
    "summary": "바퀴가 달린 큰 크레인으로 항구에서 컨테이너와 다른 화물을 들어 배와 부두 사이로 옮겨요.",
    "checkedAt": "2026-11-09",
    "sourceUrl": "https://www.liebherr.com/en-int/maritime-cranes/products/port-equipment/mobile-harbour-cranes-5391545",
    "appearance": {
      "label": "이동식 항만 크레인의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "body": "special",
    "id": "mobile-harbour-crane",
    "name": "이동식 항만 크레인",
    "aliases": [
      "모바일 하버 크레인",
      "항만 이동식 크레인"
    ],
    "cues": [
      "높은 기둥 위에서 긴 붐이 뻗어 있어요.",
      "아래에 이동을 위한 큰 바퀴가 달려 있어요."
    ],
    "tile": "#e4e9ee",
    "englishName": "Mobile Harbour Crane",
    "cardCue": "부두에서 배와 육지 사이 짐을 옮겨요."
  },
  {
    "summary": "조선소의 큰 도크 위를 가로지르며 선박을 만드는 데 필요한 무거운 부품을 들어 옮기는 거대한 크레인이에요.",
    "checkedAt": "2026-11-09",
    "sourceUrl": "https://navantia.co.uk/2026/08/19/samson-goliath-to-be-restored-to-full-strength-for-revival-in-belfast-shipbuilding/",
    "appearance": {
      "label": "조선소 골리앗 크레인의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "body": "special",
    "id": "shipyard-gantry-crane",
    "name": "조선소 골리앗 크레인",
    "aliases": [
      "조선소 대형 갠트리 크레인",
      "골리앗 크레인",
      "조선소 문형 크레인"
    ],
    "cues": [
      "아주 높은 다리와 길게 뻗은 가로보가 보여요.",
      "다리 아래가 크게 뚫려 배와 작업장이 들어가요."
    ],
    "tile": "#eee6d0",
    "englishName": "Shipyard Goliath Gantry Crane",
    "cardCue": "조선소에서 커다란 배 부품을 들어요."
  },
  {
    "summary": "지하 광산에서 앞의 절삭 드럼으로 석탄을 깎고, 기계 안의 컨베이어로 운반 장비에 보내요.",
    "checkedAt": "2026-11-09",
    "sourceUrl": "https://www.komatsu.com/en-us/products/equipment/room-and-pillar/continuous-miners",
    "appearance": {
      "label": "연속 채굴기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "body": "special",
    "id": "continuous-miner",
    "name": "연속 채굴기",
    "aliases": [
      "연속식 채굴기",
      "지하 광산 채굴기"
    ],
    "cues": [
      "낮은 차체 앞에 넓은 절삭 장치가 있어요.",
      "몸 안쪽으로 광물을 옮기는 컨베이어가 이어져요."
    ],
    "tile": "#e7e0d8",
    "englishName": "Continuous Miner",
    "cardCue": "회전하는 앞날로 석탄을 계속 캐요."
  },
  {
    "summary": "노천 광산에서 회전하는 드럼으로 바위 층을 깎고 부순 다음 컨베이어로 옮겨요.",
    "checkedAt": "2026-11-09",
    "sourceUrl": "https://www.wirtgen-group.com/ocs/en-au/wirtgen/4200-sm-75-p/",
    "appearance": {
      "label": "표면 채굴기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "body": "special",
    "id": "surface-miner",
    "name": "표면 채굴기",
    "aliases": [
      "노천 채굴기",
      "표면식 광산 채굴기"
    ],
    "cues": [
      "몸 아래에 바위를 깎는 드럼이 있어요.",
      "긴 컨베이어가 깎아 낸 광물을 내보내요."
    ],
    "tile": "#e4e0cf",
    "englishName": "Surface Miner",
    "cardCue": "노천 광산의 바위를 깎아 광물을 캐요."
  },
  {
    "summary": "전기 열차 위에 있는 전차선을 점검하고 고칠 때 승강대와 작업 장비를 싣고 철길을 달려요.",
    "checkedAt": "2026-11-09",
    "sourceUrl": "https://technology.plassertheurer.com/en/oberleitungsbau/kriterien-f%C3%BCr-die-konfiguration-von-instandhaltungsfahrzeugen",
    "appearance": {
      "label": "전차선 보수차의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "body": "rail",
    "id": "catenary-maintenance-car",
    "name": "전차선 보수차",
    "aliases": [
      "전차선 작업차",
      "가공 전차선 보수차",
      "철도 전력선 정비차"
    ],
    "cues": [
      "철길 위를 달리는 노란 작업 차량이에요.",
      "지붕 위에 사람과 장비를 올리는 작업대가 있어요."
    ],
    "tile": "#e9eadc",
    "englishName": "Catenary Maintenance Vehicle",
    "cardCue": "철도 위 전깃줄을 살펴보고 고쳐요."
  },
  {
    "id": "asphalt-distributor",
    "name": "아스팔트 유제 살포차",
    "englishName": "Asphalt Distributor",
    "body": "special",
    "aliases": [
      "유제 살포차"
    ],
    "cardCue": "도로에 검은 재료를 고르게 뿌려요.",
    "summary": "탱크에 담긴 도로 포장 재료를 뒤쪽 막대로 고르게 뿌려요.",
    "cues": [
      "큰 탱크가 실려 있어요.",
      "뒤쪽에 여러 분사구가 달린 긴 막대가 있어요."
    ],
    "appearance": {
      "label": "아스팔트 유제 살포차의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://etnyre.com/chip-seal-machines/",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "bridge-inspection-truck",
    "name": "교량 점검차",
    "englishName": "Under-Bridge Inspection Truck",
    "body": "special",
    "aliases": [
      "다리 점검차"
    ],
    "cardCue": "다리 아래를 살펴봐요.",
    "summary": "긴 팔을 다리 아래로 내려 작업자가 다리 상태를 살펴보게 도와요.",
    "cues": [
      "다리 위에 트럭이 서 있어요.",
      "긴 팔이 다리 옆을 지나 아래로 내려가요."
    ],
    "appearance": {
      "label": "교량 점검차의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://www.fhwa.dot.gov/bridge/nbis2022/qanda/08.cfm",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "steam-road-roller",
    "name": "증기 롤러",
    "englishName": "Steam Road Roller",
    "body": "special",
    "aliases": [
      "증기식 도로 롤러"
    ],
    "cardCue": "증기의 힘으로 무거운 바퀴를 굴려요.",
    "summary": "옛날에 증기의 힘으로 움직이며 도로를 눌러 다졌던 장비예요.",
    "cues": [
      "둥근 보일러와 굴뚝이 있어요.",
      "무거운 둥근 롤러로 땅을 눌러요."
    ],
    "appearance": {
      "label": "증기 롤러의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://collection.sciencemuseumgroup.org.uk/objects/co58502/aveling-steam-road-roller-of-1886-road-roller",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "diaphragm-wall-cutter",
    "name": "지하 연속벽 절삭기",
    "englishName": "Diaphragm Wall Trench Cutter",
    "body": "special",
    "aliases": [
      "하이드로밀",
      "연속벽 굴착기"
    ],
    "cardCue": "회전하는 날로 깊고 긴 홈을 파요.",
    "summary": "땅속에 벽을 세우기 위한 깊은 홈을 파는 장비예요.",
    "cues": [
      "아래쪽에 두 개의 커다란 절삭 바퀴가 있어요.",
      "몸이 위아래로 길게 서 있어요."
    ],
    "appearance": {
      "label": "지하 연속벽 절삭기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://casagrandegroup.com/wp-content/uploads/2026/02/Casagrande-General-catalogue_11-25.pdf",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "pavement-concrete-saw",
    "name": "도로 절단기",
    "englishName": "Walk-behind Road Saw",
    "body": "special",
    "aliases": [
      "콘크리트 절단기",
      "노면 절단기"
    ],
    "cardCue": "둥근 날로 도로에 선을 잘라요.",
    "summary": "둥근 날을 돌려 아스팔트나 콘크리트 바닥을 잘라요.",
    "cues": [
      "아래쪽에 둥근 절단 날이 있어요.",
      "뒤쪽 손잡이를 잡고 바닥을 따라 움직여요."
    ],
    "appearance": {
      "label": "도로 절단기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://www.husqvarnaconstruction.com/hcp/tdrdownload/pub000092539/doc000226109/-980151220?httproute=True",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "hydrodemolition-machine",
    "name": "고압수 콘크리트 제거기",
    "englishName": "Hydrodemolition Robot",
    "body": "special",
    "aliases": [
      "물분사 콘크리트 제거기",
      "하이드로데몰리션 로봇"
    ],
    "cardCue": "센 물줄기로 낡은 콘크리트를 떼어내요.",
    "summary": "아주 센 물을 사용해 다리나 바닥의 낡은 콘크리트를 제거해요.",
    "cues": [
      "낮은 몸 아래 무한궤도가 있어요.",
      "굵은 호스가 작업 장치로 이어져요."
    ],
    "appearance": {
      "label": "고압수 콘크리트 제거기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://aquajet.se/hydrodemolition/all-about-hydrodemolition/",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "underwater-rov",
    "name": "원격 조종 잠수 로봇",
    "englishName": "Remotely Operated Vehicle",
    "body": "water",
    "aliases": [
      "ROV",
      "수중 로봇",
      "해저 작업 로봇"
    ],
    "cardCue": "배에서 조종해 깊은 바닷속을 살펴봐요.",
    "summary": "배와 케이블로 이어진 로봇이 바다 밑을 비추고, 카메라로 찍거나 집게로 표본을 모아요.",
    "cues": [
      "위로 이어지는 긴 케이블을 찾아봐요.",
      "앞의 불빛과 구부러지는 집게 팔을 봐요."
    ],
    "sourceUrl": "https://oceanexplorer.noaa.gov/technology/subs-deep-discoverer/",
    "tile": "#dceaf0",
    "appearance": {
      "label": "원격 조종 잠수 로봇의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "cable-laying-ship",
    "name": "해저 케이블 설치선",
    "englishName": "Cable-Laying Ship",
    "body": "water",
    "aliases": [
      "해저 케이블 포설선",
      "케이블 부설선",
      "케이블선"
    ],
    "cardCue": "긴 케이블을 바다 밑에 놓아요.",
    "summary": "배에 실은 긴 케이블을 천천히 풀어 바다 밑에 놓고, 육지나 바다 위 시설을 연결해요.",
    "cues": [
      "케이블을 배 안이나 갑판에 실어요.",
      "배 뒤에서 케이블이 나가는 길을 찾아봐요."
    ],
    "sourceUrl": "https://www.jandenul.com/fleet/cable-installation-vessels",
    "tile": "#dceaf0",
    "appearance": {
      "label": "해저 케이블 설치선의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "jack-up-installation-vessel",
    "name": "다리로 올라서는 해상 작업선",
    "englishName": "Jack-Up Installation Vessel",
    "body": "water",
    "aliases": [
      "잭업 작업선",
      "잭업 바지선",
      "해상풍력 설치선"
    ],
    "cardCue": "긴 다리를 내려 바다 위에 서요.",
    "summary": "긴 다리가 바다 밑에 닿으면 배의 몸을 물 위로 들어 올려, 큰 크레인으로 해상 시설을 설치해요.",
    "cues": [
      "선체 위로 길게 솟은 다리를 찾아봐요.",
      "갑판에 무거운 짐을 드는 크레인이 있어요."
    ],
    "sourceUrl": "https://orsted.co.uk/media/newsroom/news/2020/09/deme-hornsea-foundations",
    "tile": "#dceaf0",
    "appearance": {
      "label": "다리로 올라서는 해상 작업선의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "semi-submersible-heavy-transport",
    "name": "반잠수식 중량물 운반선",
    "englishName": "Semi-Submersible Heavy Transport Ship",
    "body": "water",
    "aliases": [
      "반잠수 운반선",
      "중량물 운반선",
      "보카 뱅가드"
    ],
    "cardCue": "갑판을 물에 잠가 아주 큰 짐을 실어요.",
    "summary": "넓은 갑판을 물에 잠기게 해 물에 뜬 큰 짐을 그 위로 옮겨요. 배가 다시 떠오르면 짐을 받쳐 나를 수 있어요.",
    "cues": [
      "넓고 낮은 갑판에 아주 큰 짐이 올라가요.",
      "갑판 양옆에 높이 솟은 구조물이 있어요."
    ],
    "sourceUrl": "https://boskalis.com/media/zuyj1axi/boka-vanguard.pdf",
    "tile": "#dceaf0",
    "appearance": {
      "label": "반잠수식 중량물 운반선의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "floating-dry-dock",
    "name": "부유식 선박 수리 도크",
    "englishName": "Floating Dry Dock",
    "body": "water",
    "aliases": [
      "부유 도크",
      "플로팅 도크",
      "떠 있는 수리 도크"
    ],
    "cardCue": "배 밑이 물 밖으로 나오게 들어 올려요.",
    "summary": "물에 뜨는 큰 받침대를 잠기게 해 배를 들인 뒤, 다시 떠올려 배 밑바닥을 수리할 수 있게 해요.",
    "cues": [
      "높은 벽 두 개 사이에 배가 들어가요.",
      "가운데 받침대가 선체 밑을 받쳐요."
    ],
    "sourceUrl": "https://www.austal.com/ships/auxiliary-floating-docks",
    "tile": "#dceaf0",
    "appearance": {
      "label": "부유식 선박 수리 도크의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "oil-skimmer-vessel",
    "name": "기름 수거 작업선",
    "englishName": "Oil Spill Skimmer Vessel",
    "body": "water",
    "aliases": [
      "유회수선",
      "해양 기름 수거선",
      "오일 스키머"
    ],
    "cardCue": "물 위에 뜬 기름을 모아 거둬요.",
    "summary": "물 위에 뜬 기름을 울타리 같은 띠로 한곳에 모으고, 수거 장치로 걷어 내 통에 담아요.",
    "cues": [
      "기름이 퍼지지 않도록 물 위에 긴 띠를 띄워요.",
      "물 가까이에서 기름을 거두는 장치를 찾아봐요."
    ],
    "sourceUrl": "https://response.restoration.noaa.gov/oil-and-chemical-spills/oil-spills/spill-containment-methods.html",
    "tile": "#dceaf0",
    "appearance": {
      "label": "기름 수거 작업선의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "autonomous-underwater-vehicle",
    "name": "자율 잠수 탐사 로봇",
    "englishName": "Propeller-Driven Autonomous Underwater Vehicle",
    "body": "water",
    "aliases": [
      "AUV",
      "자율 무인 잠수정",
      "REMUS"
    ],
    "cardCue": "정해 둔 길을 따라 바닷속을 조사해요.",
    "summary": "출발하기 전에 조사할 길을 정해 줘요. 로봇은 물속에서 스스로 움직이며 바다 밑 모습을 기록해요.",
    "cues": [
      "긴 원통 몸과 끝에 달린 작은 날개를 찾아봐요.",
      "이런 로봇은 뒤쪽 프로펠러로 앞으로 나아가요."
    ],
    "sourceUrl": "https://www.whoi.edu/what-we-do/explore/underwater-vehicles/auvs/remus/",
    "tile": "#dceaf0",
    "appearance": {
      "label": "자율 잠수 탐사 로봇의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "underwater-glider",
    "name": "수중 글라이더",
    "englishName": "Underwater Glider",
    "body": "water",
    "aliases": [
      "바닷속 글라이더",
      "해양 글라이더",
      "슬로컴 글라이더"
    ],
    "cardCue": "작은 날개로 물속을 미끄러져요.",
    "summary": "물에 뜨는 힘을 조금씩 바꿔 위아래로 움직이고, 작은 날개로 물속을 앞으로 미끄러져요.",
    "cues": [
      "몸 양쪽에 짧은 날개가 있어요.",
      "물속을 오르내리며 온도 같은 정보를 모아요."
    ],
    "sourceUrl": "https://pmel.noaa.gov/edd/slocum-sub-surface-electric-gliders/",
    "tile": "#dceaf0",
    "appearance": {
      "label": "수중 글라이더의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "seabed-rock-placement-vessel",
    "name": "해저에 돌을 놓는 작업선",
    "englishName": "Subsea Rock Placement Vessel",
    "body": "water",
    "aliases": [
      "석재 투하선",
      "해저 사석 투하선",
      "돌 놓는 배"
    ],
    "cardCue": "바다 밑에 돌을 놓아 시설을 보호해요.",
    "summary": "배에 실은 돌을 바닷속에 내려, 물살에 바닥이 깎이기 쉬운 곳이나 배관 위를 덮어 보호해요.",
    "cues": [
      "갑판에 돌을 실을 넓은 자리가 있어요.",
      "장비에 따라 옆으로 돌을 내리거나 관을 써요."
    ],
    "sourceUrl": "https://www.jandenul.com/fleet/rock-installation-vessels",
    "tile": "#dceaf0",
    "appearance": {
      "label": "해저에 돌을 놓는 작업선의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "olive-tree-shaker",
    "name": "올리브 나무 진동 수확기",
    "englishName": "Olive tree shaker",
    "body": "farm",
    "aliases": [
      "olive tree shaker",
      "trunk vibrator",
      "올리브 수확기",
      "나무 진동기"
    ],
    "cardCue": "나무줄기를 잡는 집게를 찾아봐요.",
    "summary": "나무줄기를 붙잡고 흔들어 익은 올리브를 떨어뜨려요.",
    "cues": [
      "앞쪽 장치가 나무줄기를 감싸도록 다가가요.",
      "진동으로 열매를 떨어뜨려 수확을 도와요."
    ],
    "sourceUrl": "https://www.pellenc.com/en-gb/our-products/fruit-growing-and-olive-growing/olive-growing/harvesting/fb80-tractor-mounted-frontal-vibrator",
    "tile": "#e7ebed",
    "appearance": {
      "label": "올리브 나무 진동 수확기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "vegetable-transplanter",
    "name": "채소 모종 이식기",
    "englishName": "Vegetable transplanter",
    "body": "farm",
    "aliases": [
      "seedling transplanter",
      "vegetable transplanter",
      "모종 심는 기계",
      "채소 정식기"
    ],
    "cardCue": "모종을 놓는 자리를 찾아봐요.",
    "summary": "밭에 고랑을 내고 어린 모종을 옮겨 심어요.",
    "cues": [
      "모종을 놓는 장치가 여러 줄로 이어져요.",
      "심은 뒤 흙을 눌러 모종을 세워 줘요."
    ],
    "sourceUrl": "https://www.checchiemagli.com/en/machines/transplanters/",
    "tile": "#e7ebed",
    "appearance": {
      "label": "채소 모종 이식기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "onion-harvester",
    "name": "양파 수확기",
    "englishName": "Onion harvester",
    "body": "farm",
    "aliases": [
      "onion digger",
      "onion harvester",
      "양파 캐는 기계",
      "양파 굴취기"
    ],
    "cardCue": "땅속 양파를 들어 올리는 부분을 찾아봐요.",
    "summary": "흙속 양파를 들어 올려 수확하기 쉽게 모아요.",
    "cues": [
      "트랙터에 흙을 파고 양파를 건지는 장치가 붙어요.",
      "작업부가 흙을 들어 올려 양파를 꺼내요."
    ],
    "sourceUrl": "https://imac-rondelli.it/en/company/",
    "tile": "#e7ebed",
    "appearance": {
      "label": "양파 수확기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "tree-spade",
    "name": "나무 이식용 스페이드",
    "englishName": "Tree spade",
    "body": "special",
    "aliases": [
      "tree spade",
      "tree digger",
      "나무 옮기는 기계",
      "나무 이식기",
      "뿌리 삽"
    ],
    "cardCue": "나무뿌리를 감싸는 삽날을 찾아봐요.",
    "summary": "넓은 삽날로 뿌리와 흙덩이를 감싸 나무를 옮겨요.",
    "cues": [
      "여러 삽날이 뿌리 주변에서 모여요.",
      "흙덩이를 지켜 나무를 다른 곳에 심어요."
    ],
    "sourceUrl": "https://www.dutchmantreespade.com/products/",
    "tile": "#e7ebed",
    "appearance": {
      "label": "나무 이식용 스페이드의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "stump-grinder",
    "name": "그루터기 분쇄기",
    "englishName": "Stump grinder",
    "body": "special",
    "aliases": [
      "stump grinder",
      "stump cutter",
      "그루터기 제거기",
      "나무 밑동 분쇄기"
    ],
    "cardCue": "둥근 절삭날이 어디에 닿는지 봐요.",
    "summary": "돌아가는 날로 나무 밑동을 잘게 갈아요.",
    "cues": [
      "둥근 날의 단단한 이빨이 나무를 갈아요.",
      "갈린 나무 조각이 그루터기 주변에 보여요."
    ],
    "sourceUrl": "https://fecon.com/stump-grinders/",
    "tile": "#e7ebed",
    "appearance": {
      "label": "그루터기 분쇄기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "vineyard-pre-pruner",
    "name": "포도밭 예비 전정기",
    "englishName": "Vineyard pre-pruner",
    "body": "farm",
    "aliases": [
      "vineyard pre-pruner",
      "vine pre-pruner",
      "포도나무 가지치기",
      "포도나무 전정기"
    ],
    "cardCue": "포도나무 줄을 덮는 장치를 찾아봐요.",
    "summary": "포도 덩굴을 미리 잘라 다음 전정 일을 도와요.",
    "cues": [
      "포도나무 줄 위를 지나며 덩굴을 다듬어요.",
      "전정 장치가 운반차에 연결되어 움직여요."
    ],
    "sourceUrl": "https://www.pellenc.com/en-gb/our-products/from-the-vineyard-to-the-winery/vine-growing/tools-for-in-the-row-tractors-for-wide-row-vineyards/disco-and-visio-tractor-mounted-pre-pruners",
    "tile": "#e7ebed",
    "appearance": {
      "label": "포도밭 예비 전정기의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "track-measuring-car",
    "name": "선로 측정차",
    "englishName": "Track Geometry Measuring Car",
    "body": "rail",
    "aliases": [
      "선로 검측차",
      "선로 상태 측정차",
      "궤도 측정 열차"
    ],
    "cardCue": "선로의 폭과 높낮이를 살펴봐요.",
    "summary": "선로 측정차는 레일 사이의 폭과 선로의 높낮이·기울기를 재어 어디를 살펴봐야 하는지 알려줘요.",
    "cues": [
      "길고 노란 철도 차량이 보여요.",
      "차체 옆면에 측정 장비와 작은 표지가 붙어 있어요."
    ],
    "sourceUrl": "https://www.networkrailmediacentre.co.uk/news/network-rail-launches-new-measurement-train-2",
    "tile": "#e9e1c8",
    "appearance": {
      "label": "선로 측정차의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "rail-recovery-crane",
    "name": "철도 복구 크레인",
    "englishName": "Railway Recovery Crane",
    "body": "rail",
    "aliases": [
      "철도 구난 크레인",
      "철도 복구 열차 크레인",
      "레일 크레인"
    ],
    "cardCue": "탈선한 열차를 다시 선로에 올려요.",
    "summary": "철도 복구 크레인은 사고나 고장으로 선로를 벗어난 열차를 들어 올려 다시 선로에 올리는 일을 도와요.",
    "cues": [
      "철도 바퀴 위에 무거운 크레인이 실려 있어요.",
      "긴 붐을 접어 열차 위에 나란히 놓았어요."
    ],
    "sourceUrl": "https://www.volkerrail.co.uk/en/rail-plant/kirow-rail-mounted-cranes",
    "tile": "#e1e8eb",
    "appearance": {
      "label": "철도 복구 크레인의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "rail-milling-train",
    "name": "레일 밀링 열차",
    "englishName": "Rail Milling Train",
    "body": "rail",
    "aliases": [
      "레일 절삭 열차",
      "레일 밀링차"
    ],
    "cardCue": "레일 표면을 깎아 모양을 다듬어요.",
    "summary": "레일 밀링 열차는 레일 윗면을 회전하는 절삭 도구로 조금씩 깎아 표면 모양을 다듬어요. 깎인 쇳조각은 기계 안에 모아요.",
    "cues": [
      "여러 작업 칸이 이어진 긴 노란 열차예요.",
      "차량 아래쪽에 레일을 다듬는 장치가 들어 있어요."
    ],
    "sourceUrl": "https://www.linsinger.com/rail-technology/",
    "tile": "#e6e7d9",
    "appearance": {
      "label": "레일 밀링 열차의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "rail-welding-vehicle",
    "name": "레일 용접차",
    "englishName": "Rail Welding Vehicle",
    "body": "rail",
    "aliases": [
      "Welderliner",
      "레일 용접 차량",
      "도로·철도 겸용 용접차"
    ],
    "cardCue": "레일 끝을 이어 붙여요.",
    "summary": "레일 용접차는 레일을 따라 이동하며 레일 끝을 이어 붙이는 장비를 실어 나르고, 선로 이음새를 단단하게 만들어요.",
    "cues": [
      "도로용 큰 바퀴와 레일 위에 맞추는 작은 바퀴가 함께 보여요.",
      "차 뒤쪽에 레일을 잡고 용접하는 장치가 달려 있어요."
    ],
    "sourceUrl": "https://www.saz.cz/en/road-rail-welding-vehicle-welderliner/",
    "tile": "#ece2cb",
    "appearance": {
      "label": "레일 용접차의 구조와 하는 일 · 실물 장비 예시",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "amphibious-excavator",
    "name": "수륙양용 굴착기",
    "englishName": "Amphibious Excavator",
    "body": "special",
    "aliases": [
      "수상 굴착기",
      "폰툰 굴착기",
      "물가 굴착기"
    ],
    "cardCue": "물가의 부드러운 땅에서도 파요.",
    "summary": "수륙양용 굴착기는 넓은 부력 받침을 달아 늪이나 얕은 물가처럼 바닥이 약한 곳에서 땅을 파고 물길을 정리해요.",
    "cues": [
      "굴착기 팔과 버킷이 보여요.",
      "바퀴 대신 넓은 흰색 부력 받침 위에 몸체가 놓여 있어요."
    ],
    "sourceUrl": "https://waterking.nl/en/amphibious-excavators/",
    "tile": "#d8e7e4",
    "appearance": {
      "label": "수륙양용 굴착기의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "shotcrete-sprayer",
    "name": "숏크리트 분사차",
    "englishName": "Shotcrete Sprayer",
    "body": "special",
    "aliases": [
      "터널 콘크리트 분사차",
      "숏크리트 장비",
      "터널 숏크리트차"
    ],
    "cardCue": "터널 벽에 콘크리트를 뿌려요.",
    "summary": "숏크리트 분사차는 긴 팔 끝의 노즐로 콘크리트를 터널 벽과 천장에 뿌려 주변을 단단하게 보강해요.",
    "cues": [
      "차체에서 길게 뻗은 여러 마디 분사 팔이 보여요.",
      "팔 끝에서 터널 벽 쪽으로 하얀 분사 흐름이 나와요."
    ],
    "sourceUrl": "https://www.putzmeister.com/web/european-union/product-detail/-/product/201/spm-4210-wetkret",
    "tile": "#e8dfd7",
    "appearance": {
      "label": "숏크리트 분사차의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "underground-mine-truck",
    "name": "지하 광산 운반 트럭",
    "englishName": "Underground Mine Truck",
    "body": "special",
    "aliases": [
      "지하 광산 덤프트럭",
      "광산용 지하 트럭",
      "광산 덤퍼"
    ],
    "cardCue": "좁은 갱도에서 광석을 실어 나릅니다.",
    "summary": "지하 광산 트럭은 낮은 갱도에서 캐낸 돌과 광석을 싣고 옮겨요. 앞에 버킷을 단 광산 로더와 달리 뒤쪽 적재함에 짐을 실어요.",
    "cues": [
      "운전석 뒤에 큰 상자 모양 적재함이 있어요.",
      "천장이 낮은 광산 안에 들어갈 수 있게 차체가 낮고 짧아요."
    ],
    "sourceUrl": "https://www.epiroc.com/en-er/products/loaders-and-trucks/underground-mining-trucks",
    "tile": "#e4e1d9",
    "appearance": {
      "label": "지하 광산 운반 트럭의 구조와 하는 일 · 실물 장비 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "tesla-cybertruck",
    "name": "테슬라 사이버트럭",
    "englishName": "Tesla Cybertruck",
    "aliases": [
      "사이버트럭",
      "테슬라 픽업",
      "전기 픽업",
      "픽업트럭",
      "Cybertruck"
    ],
    "cardCue": "지붕에서 짐칸으로 이어지는 사선을 찾아봐요.",
    "summary": "은빛 스테인리스 강판으로 각진 몸을 만든 전기 픽업이에요. 뒤쪽 덮개 아래에 짐을 실어요.",
    "cues": [
      "앞쪽 불빛이 차 너비를 따라 한 줄로 이어져요.",
      "옆에서 보면 지붕의 높은 꼭짓점과 뒤쪽으로 내려가는 선이 보여요."
    ],
    "sourceUrl": "https://www.tesla.com/cybertruck",
    "tile": "#d6dde0",
    "body": "motorsport",
    "appearance": {
      "label": "테슬라 사이버트럭 · 실물 예시와 구조",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "formula-one-car",
    "name": "F1 오픈휠 경주차",
    "englishName": "Formula 1 race car",
    "aliases": [
      "에프원",
      "포뮬러 원",
      "오픈휠",
      "싱글시터",
      "F1",
      "레이싱카",
      "경주차"
    ],
    "cardCue": "차체 바깥의 네 바퀴와 앞뒤 날개를 찾아봐요.",
    "summary": "운전자 한 명이 타는 경주차예요. 바퀴가 차체 밖에 드러나고, 앞뒤 날개가 차를 길 쪽으로 눌러 줘요.",
    "cues": [
      "앞날개는 납작하게 바닥 가까이에 있고, 뒷날개는 바퀴보다 높은 곳에 있어요.",
      "운전자 머리 둘레에 보호용 테두리인 헤일로가 보여요."
    ],
    "sourceUrl": "https://www.formula1.com/en/latest/article/the-beginners-guide-to-the-2026-regulations.6j0tS0hrHG2T01tpmK6XYz",
    "tile": "#cddad9",
    "body": "motorsport",
    "appearance": {
      "label": "F1 오픈휠 경주차 · 실물 예시와 구조",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "formula-e-car",
    "name": "포뮬러 E 전기 경주차",
    "englishName": "Formula E GEN3 Evo",
    "aliases": [
      "포뮬러 이",
      "전기 경주차",
      "포뮬러E",
      "GEN3 Evo",
      "오픈휠",
      "경주차"
    ],
    "cardCue": "앞에서 바퀴가 어떻게 보이는지 살펴봐요.",
    "summary": "배터리의 전기로 달리는 한 자리 경주차예요. 속도를 줄일 때 바퀴의 움직임으로 전기를 다시 모아요.",
    "cues": [
      "차체 앞쪽에 낮고 넓은 날개가 보여요.",
      "빗길 사진에서는 타이어가 뒤로 물을 뿌려요."
    ],
    "sourceUrl": "https://www.fiaformulae.com/en/news/explainers/everything-you-need-to-know-about-formula-es-latest-race-car-gen3-evo-s12",
    "tile": "#e0dbec",
    "body": "motorsport",
    "appearance": {
      "label": "포뮬러 E 전기 경주차 · 실물 예시와 구조",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "indycar",
    "name": "인디카 오픈휠 경주차",
    "englishName": "IndyCar Dallara DW12",
    "aliases": [
      "인디카",
      "인디 500",
      "Indy 500",
      "Dallara DW12",
      "오픈휠",
      "싱글시터",
      "경주차"
    ],
    "cardCue": "운전자 앞의 투명한 보호창을 찾아봐요.",
    "summary": "타원형 트랙과 여러 모양의 코스를 달리는 한 자리 경주차예요. 운전자 앞에 투명한 보호창이 있어요.",
    "cues": [
      "운전자 앞을 감싼 투명한 창을 에어로스크린이라고 불러요.",
      "앞바퀴와 뒷바퀴가 몸 바깥으로 드러나요."
    ],
    "sourceUrl": "https://www.indycar.com/Fan-Info/INDYCAR-101/Cars",
    "tile": "#dbe0eb",
    "body": "motorsport",
    "appearance": {
      "label": "인디카 오픈휠 경주차 · 실물 예시와 구조",
      "change": "vehicle"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "monster-truck",
    "name": "몬스터 트럭",
    "englishName": "Monster Truck",
    "body": "motorsport",
    "aliases": [
      "몬스터카",
      "경주차"
    ],
    "cardCue": "큰 바퀴로 높이 뛰어올라요.",
    "summary": "아주 큰 바퀴를 달고 경기장에서 묘기와 경주를 펼쳐요.",
    "cues": [
      "커다란 바퀴가 차체 옆으로 튀어나와요.",
      "사진 속 트럭은 흙언덕 위로 뛰어올라요."
    ],
    "appearance": {
      "label": "하는 일과 구조 · 실물 예시",
      "change": "vehicle"
    },
    "sourceUrl": "https://www.monsterjam.com/en-ae/monster-jam-101/",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "top-fuel-dragster",
    "name": "톱 퓨얼 드래그스터",
    "englishName": "Top Fuel Dragster",
    "body": "motorsport",
    "aliases": [
      "드래그 레이싱카",
      "경주차"
    ],
    "cardCue": "곧은 경기장을 빠르게 달려요.",
    "summary": "아주 긴 몸으로 곧은 경기장에서 빠르기를 겨루는 경주차예요.",
    "cues": [
      "앞부분이 길고 뾰족해요.",
      "큰 뒷바퀴와 높은 날개가 보여요."
    ],
    "appearance": {
      "label": "하는 일과 구조 · 실물 예시",
      "change": "vehicle"
    },
    "sourceUrl": "https://www.nhra.com/nhra-101/drag-racing-classes",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "snowcoach",
    "name": "설상 관광차",
    "englishName": "Snowcoach",
    "body": "road",
    "aliases": [
      "스노코치"
    ],
    "cardCue": "눈길을 따라 사람들을 태워요.",
    "summary": "눈 덮인 길에서 사람들을 태우고 여행하는 차예요.",
    "cues": [
      "사진 속 노란 차 앞에 스키가 보여요.",
      "차 옆으로 눈길과 들소가 보여요."
    ],
    "appearance": {
      "label": "하는 일과 구조 · 실물 예시",
      "change": "vehicle"
    },
    "sourceUrl": "https://www.nps.gov/thingstodo/ride-a-snowmobile-or-snowcoach-in-yellowstone.htm",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "thrustssc",
    "name": "스러스트 SSC",
    "englishName": "ThrustSSC",
    "body": "special",
    "aliases": [
      "초음속 자동차"
    ],
    "cardCue": "제트 엔진으로 빠르기에 도전했어요.",
    "summary": "두 제트 엔진을 단 육상 속도 기록 도전 자동차예요.",
    "cues": [
      "뾰족한 앞부분 양옆에 커다란 둥근 엔진 입구가 있어요.",
      "사진은 박물관에 전시된 실물이에요."
    ],
    "appearance": {
      "label": "하는 일과 구조 · 실물 예시",
      "change": "equipment"
    },
    "sourceUrl": "https://transport-museum.com/visiting/thrustssc.aspx",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "amphicar",
    "name": "앰피카",
    "englishName": "Amphicar",
    "body": "road",
    "aliases": [
      "수륙양용 자동차"
    ],
    "cardCue": "땅과 물을 모두 다녀요.",
    "summary": "도로에서는 자동차처럼 달리고 물에서는 배처럼 움직이는 수륙양용 자동차예요.",
    "cues": [
      "자동차 모양 몸체가 물 위에 떠 있어요.",
      "사진에서는 바퀴가 물에 가려져 있어요."
    ],
    "appearance": {
      "label": "하는 일과 구조 · 실물 예시",
      "change": "vehicle"
    },
    "sourceUrl": "https://www.lanemotormuseum.org/collection/cars/item/amphicar-1964/",
    "tile": "#e8e8de",
    "checkedAt": "2026-11-09"
  },
  {
    "id": "tracked-dumper",
    "name": "궤도 운반차",
    "englishName": "Tracked Dumper",
    "body": "special",
    "aliases": [
      "무한궤도 운반차",
      "크롤러 캐리어"
    ],
    "cardCue": "고무 궤도로 험한 땅에서 흙을 옮겨요.",
    "summary": "궤도 운반차는 바퀴가 빠지기 쉬운 진흙이나 모래밭에서 짐을 나르는 덤프 차량이에요. 고무 궤도가 땅을 넓게 받쳐 움직이도록 도와줘요.",
    "cues": [
      "넓은 고무 궤도 두 줄이 보여요.",
      "뒤쪽 적재함에 흙을 실어요."
    ],
    "sourceUrl": "https://www.morooka.com/wpe/wp-content/uploads/2024/11/Carrier_general.pdf",
    "tile": "#e8dfc9",
    "appearance": {
      "label": "고무 궤도로 짐을 나르는 크롤러 캐리어 · Morooka MST 2200 VDR 실물 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "road-rail-rescue-vehicle",
    "name": "도로·철도 겸용 구난차",
    "englishName": "Road-Rail Rescue Vehicle",
    "body": "special",
    "aliases": [
      "도로·철도 겸용 복구차",
      "철도 구조차",
      "레일 구난차"
    ],
    "cardCue": "도로와 선로를 달려 탈선 열차를 도와요.",
    "summary": "도로와 철길을 달려요. 사고가 나면 구조 장비를 옮기고 선로에서 벗어난 열차를 들어 올리는 일을 도와요.",
    "cues": [
      "큰 트럭 바퀴와 선로용 작은 바퀴가 함께 있어요.",
      "옆의 긴 수납칸에 구조 도구를 실어요."
    ],
    "sourceUrl": "https://www.zagro-group.com/en/produkte/not-und-rettungsfahrzeuge/recovery-and-rescue-vehicles",
    "tile": "#e3e5d9",
    "appearance": {
      "label": "Hilton 도로·철도 겸용 구난 차량 · 전시된 서로 다른 실물 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "overhead-line-puller-tensioner",
    "name": "전선 당김·장력 조절기",
    "englishName": "Overhead Line Puller-Tensioner",
    "body": "special",
    "aliases": [
      "가공 전선 장력기",
      "전선 포설 당김기",
      "전선 풀러 텐셔너"
    ],
    "cardCue": "전선을 당기거나 팽팽하게 잡아줘요.",
    "summary": "전선 당김·장력 조절기는 높은 전선이나 로프를 설치할 때 일정한 힘으로 잡아당기거나 팽팽하게 유지해요. 전선이 너무 느슨하거나 갑자기 당겨지지 않도록 도와줘요.",
    "cues": [
      "홈이 여러 개 난 큰 바퀴에 전선이 감겨요.",
      "튼튼한 바퀴 받침과 안정 다리가 있어요."
    ],
    "sourceUrl": "https://www.omac-italy.com/wp-content/uploads/2025/07/OMAC_OVERHEAD-LINE-STRINGING_07-2025_.pdf",
    "tile": "#dce8e9",
    "appearance": {
      "label": "가공 전선 설치용 OMAC 유압 풀러·텐셔너 실물 예시",
      "change": "equipment"
    },
    "checkedAt": "2026-11-09"
  },
  {
    "id": "ekranoplan",
    "name": "에크라노플랜",
    "englishName": "Ekranoplan",
    "body": "water",
    "aliases": [
      "ground-effect craft",
      "wing-in-ground-effect craft",
      "위그선",
      "수면효과선"
    ],
    "cardCue": "낮게 나는 날개 달린 배를 찾아봐요.",
    "summary": "날개 아래 공기층을 이용해 물 가까이 낮게 나는 특수 탈것이에요.",
    "cues": [
      "넓은 날개와 배처럼 생긴 아래쪽 몸체가 있어요.",
      "사진 속 큰 탈것은 해변에 전시된 룬급이에요."
    ],
    "sourceUrl": "https://wwwcdn.imo.org/localresources/en/OurWork/Safety/Documents/MSC.1-CIRC.1592.pdf",
    "tile": "#dcebef",
    "checkedAt": "2026-11-09",
    "appearance": {
      "label": "에크라노플랜 · 실물 예시와 구조",
      "change": "vehicle"
    }
  },
  {
    "id": "hydrofoil-ferry",
    "name": "수중익선 여객선",
    "englishName": "Hydrofoil ferry",
    "body": "water",
    "aliases": [
      "hydrofoil",
      "수중익선"
    ],
    "cardCue": "선체 아래 날개 같은 받침을 찾아봐요.",
    "summary": "속도가 나면 물속의 날개가 선체를 들어 올려 빠르게 달리는 여객선이에요.",
    "cues": [
      "앞과 뒤의 물속 날개가 선체를 들어 올려요.",
      "사진은 러시아 코메타급 여객선이 물 위를 달리는 모습이에요."
    ],
    "sourceUrl": "https://global.kawasaki.com/en/corp/newsroom/news/detail/?f=20251121_1941",
    "tile": "#dcebef",
    "checkedAt": "2026-11-09",
    "appearance": {
      "label": "수중익선 여객선 · 실물 예시와 구조",
      "change": "vehicle"
    }
  },
  {
    "id": "water-scooping-firefighter",
    "name": "산불 진화용 물투하 비행기",
    "englishName": "Water-scooping firefighting aircraft",
    "body": "fixedwing",
    "aliases": [
      "water bomber",
      "airtanker",
      "산불 진화 비행기"
    ],
    "cardCue": "물 위를 스치며 물을 담는 비행기예요.",
    "summary": "호수나 바다에서 물을 받아 산불 현장에 뿌리는 수륙양용 비행기예요.",
    "cues": [
      "날개 아래쪽에 배처럼 물에 뜨는 몸체가 있어요.",
      "사진은 CL-415EAF가 호수에서 물을 뜨는 장면이에요."
    ],
    "sourceUrl": "https://dehavilland.com/cl-415-2/",
    "tile": "#e9e4d7",
    "checkedAt": "2026-11-09",
    "appearance": {
      "label": "산불 진화용 물투하 비행기 · 실물 예시와 구조",
      "change": "aircraft"
    }
  },
  {
    "id": "powered-parachute",
    "name": "동력 패러슈트",
    "englishName": "Powered parachute",
    "body": "specialflight",
    "aliases": [
      "powered parachute aircraft",
      "PPC"
    ],
    "cardCue": "낙하산 날개와 작은 프로펠러를 찾아봐요.",
    "summary": "낙하산 모양 날개와 엔진이 달린 작은 바퀴 달린 틀로 나는 항공기예요.",
    "cues": [
      "넓은 천 날개가 여러 줄로 아래쪽 바퀴 틀에 이어져요.",
      "뒤쪽 프로펠러가 항공기를 앞으로 밀어요."
    ],
    "sourceUrl": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/powered_parachute_handbook.pdf",
    "tile": "#e5e5f1",
    "checkedAt": "2026-11-09",
    "appearance": {
      "label": "동력 패러슈트 · 실물 예시와 구조",
      "change": "aircraft"
    }
  },
  {
    "id": "tiltrotor-aircraft",
    "name": "틸트로터 항공기",
    "englishName": "Tiltrotor aircraft",
    "body": "specialflight",
    "aliases": [
      "tiltrotor",
      "V-22 Osprey"
    ],
    "cardCue": "날개 끝의 큰 프로펠러 방향을 살펴봐요.",
    "summary": "큰 프로펠러를 위로 돌려 헬리콥터처럼 뜨고, 앞으로 돌려 비행기처럼 날아요.",
    "cues": [
      "양쪽 날개 끝에 엔진과 프로펠러가 하나씩 있어요.",
      "사진은 V-22 오스프리가 날개 끝 엔진을 위로 기울여 나는 모습이에요."
    ],
    "sourceUrl": "https://www.boeing.com/defense/military-rotorcraft/v-22-osprey",
    "tile": "#e5e5f1",
    "checkedAt": "2026-11-09",
    "appearance": {
      "label": "틸트로터 항공기 · 실물 예시와 구조",
      "change": "aircraft"
    }
  },
  {
    "id": "road-train",
    "name": "로드 트레인",
    "englishName": "Road train",
    "body": "road",
    "aliases": [
      "로드트레인",
      "도로 열차",
      "다중 트레일러",
      "호주 트럭",
      "Australian road train"
    ],
    "cardCue": "트럭 뒤에 짐칸이 몇 개 이어져 있는지 세어 봐요.",
    "summary": "트럭 한 대가 여러 트레일러를 이어 끌어요. 호주의 긴 도로에서 한 번에 많은 짐을 나르는 데 쓰여요.",
    "cues": [
      "트레일러마다 바퀴가 여러 개 달려 있어요.",
      "짐칸 사이에 서로 이어 주는 연결 부분이 있어요."
    ],
    "sourceUrl": "https://www.nhvr.gov.au/road-access/mass-dimension-and-loading/classes-of-heavy-vehicles/class-2/road-train-speed-limits",
    "tile": "#e8e1d2",
    "checkedAt": "2026-11-13",
    "appearance": {
      "label": "호주 도로에서 여러 트레일러를 연결한 실물 예시",
      "change": "vehicle"
    }
  }
];
