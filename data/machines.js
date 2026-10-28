// Equipment entries describe types and jobs; photographs are real examples, not latest-model claims.
export const machines = [
  {
    "id": "walking-excavator",
    "name": "걷는 굴착기",
    "englishName": "Walking Excavator",
    "body": "special",
    "aliases": [
      "보행 굴착기",
      "거미 굴착기"
    ],
    "cardCue": "다리를 뻗어 비탈에서 일해요.",
    "summary": "움직이는 다리와 바퀴로 비탈에 자리를 잡고 긴 팔로 땅을 파요.",
    "cues": [
      "몸 아래 다리가 여러 방향으로 뻗어 있어요.",
      "긴 팔 끝에 흙을 파는 바가지가 있어요."
    ],
    "sourceUrl": "https://menzimuck.com/en/product/walking-excavator/menzi-muck-m5x/",
    "tile": "#e8e8de"
  },
  {
    "id": "dragline",
    "name": "드래그라인 굴착기",
    "englishName": "Dragline Excavator",
    "body": "special",
    "aliases": [
      "드래그라인",
      "줄 굴착기"
    ],
    "cardCue": "줄로 바가지를 끌어 흙을 파요.",
    "summary": "긴 팔에 매단 바가지를 줄로 끌어 흙을 파요.",
    "cues": [
      "아주 긴 격자 모양 팔이 뻗어 있어요.",
      "여러 줄에 매달린 큰 바가지를 찾아봐요."
    ],
    "sourceUrl": "https://rent.cat.com/en_US/articles/trenchers-vs-excavators",
    "tile": "#ece3d6"
  },
  {
    "id": "trencher",
    "name": "트렌처",
    "englishName": "Trencher",
    "body": "special",
    "aliases": [
      "도랑 파는 기계",
      "트렌칭 머신"
    ],
    "cardCue": "길고 좁은 도랑을 파요.",
    "summary": "회전하는 날이 달린 체인으로 땅에 길고 좁은 도랑을 파요.",
    "cues": [
      "뒤쪽에 길게 뻗은 파는 장치가 있어요.",
      "장치 둘레에 톱니가 달린 체인이 보여요."
    ],
    "sourceUrl": "https://protips.vermeer.com/underground/2024/09/03/configuring-your-vermeer-trencher-for-jobsite-versatility/",
    "tile": "#e9ead8"
  },
  {
    "id": "wheel-tractor-scraper",
    "name": "스크레이퍼",
    "englishName": "Wheel Tractor-Scraper",
    "body": "special",
    "aliases": [
      "스크래이퍼",
      "흙 긁는 차",
      "스크래퍼",
      "스크레이퍼"
    ],
    "cardCue": "흙을 긁어 담고 옮겨요.",
    "summary": "바닥의 날로 흙을 긁어 큰 통에 담아 다른 곳으로 옮겨요.",
    "cues": [
      "앞부분과 흙을 담는 뒷부분이 이어져 있어요.",
      "몸 가운데 아래에 커다란 흙통이 있어요."
    ],
    "sourceUrl": "https://www.cat.com/en_US/products/new/equipment/wheel-tractor-scrapers/open-bowl-scrapers/125864.html",
    "tile": "#efe6cf"
  },
  {
    "id": "reach-stacker",
    "name": "리치스태커",
    "englishName": "Reachstacker",
    "body": "special",
    "aliases": [
      "리치 스태커",
      "컨테이너 적재차"
    ],
    "cardCue": "긴 팔로 컨테이너를 들어 쌓아요.",
    "summary": "바퀴로 움직이며 긴 팔 끝의 장치로 컨테이너를 들어 옮기고 쌓아요.",
    "cues": [
      "앞쪽으로 뻗은 굵고 긴 팔이 있어요.",
      "팔 끝에 컨테이너를 잡는 네모난 장치가 있어요."
    ],
    "sourceUrl": "https://new.kalmarglobal.com/equipment/reachstackers/",
    "tile": "#e5e9ef"
  },
  {
    "id": "rotary-drilling-rig",
    "name": "회전식 시추기",
    "englishName": "Rotary Drilling Rig",
    "body": "special",
    "aliases": [
      "시추기",
      "드릴 장비"
    ],
    "cardCue": "땅에 깊은 구멍을 뚫어요.",
    "summary": "긴 기둥을 따라 드릴을 돌려 건물의 기초를 만들 깊은 구멍을 뚫어요.",
    "cues": [
      "몸 앞에 높이 솟은 기둥이 있어요.",
      "기둥 아래에 땅을 파는 원통형 도구가 있어요."
    ],
    "sourceUrl": "https://www.liebherr.com/en-ca/deep-foundation/methods/drilling/kelly-drilling-4079772",
    "tile": "#f0e7d5"
  },
  {
    id: "excavator", name: "굴착기", englishName: "Excavator", body: "construction",
    aliases: ["포클레인", "포크레인", "굴삭기", "땅 파는 차"],
    cardCue: "긴 팔로 땅을 파요.", summary: "긴 팔 끝의 바가지로 흙을 파고 옮겨요.",
    cues: ["팔 끝에 커다란 바가지가 달렸어요.", "팔이 여러 마디로 구부러져요."],
    sourceUrl: "https://rent.cat.com/en_US/articles/construction-equipment-names?isLanguageMaster=true", tile: "#f1ead5"
  },
  {
    id: "bulldozer", name: "불도저", englishName: "Bulldozer", body: "construction",
    aliases: ["도저", "흙 미는 차"],
    cardCue: "넓은 앞날로 흙을 밀어요.", summary: "앞쪽의 넓은 날로 흙과 돌을 밀어내요.",
    cues: ["앞쪽에 넓고 튼튼한 날이 있어요.", "바퀴를 감싼 넓은 띠로 움직여요."],
    sourceUrl: "https://rent.cat.com/en_US/articles/construction-equipment-names?isLanguageMaster=true", tile: "#ece5d2"
  },
  {
    id: "wheel-loader", name: "휠로더", englishName: "Wheel Loader", body: "construction",
    aliases: ["휠 로더", "로더", "바퀴식 로더", "페이로더"],
    cardCue: "큰 바가지로 흙을 떠요.", summary: "앞쪽 바가지로 흙과 돌을 퍼서 옮겨요.",
    cues: ["앞쪽에 커다란 바가지가 있어요.", "몸 아래의 큰 바퀴들을 살펴봐요."],
    sourceUrl: "https://rent.cat.com/en_US/articles/construction-equipment-names?isLanguageMaster=true", tile: "#efe6cf"
  },
  {
    id: "backhoe-loader", name: "백호 로더", englishName: "Backhoe Loader", body: "construction",
    aliases: ["백호로더", "백호", "백호우", "앞뒤 바가지"],
    cardCue: "앞과 뒤에서 다른 일을 해요.", summary: "앞에서는 흙을 퍼 올리고, 뒤에서는 땅을 파요.",
    cues: ["앞쪽에는 넓은 바가지가 있어요.", "뒤쪽에도 땅을 파는 긴 팔이 있어요."],
    sourceUrl: "https://rent.cat.com/en_US/articles/construction-equipment-names?isLanguageMaster=true", tile: "#e9ecd8"
  },
  {
    id: "skid-steer-loader", name: "스키드 스티어 로더", englishName: "Skid-Steer Loader", body: "construction",
    aliases: ["스키드로더", "스키드 로더", "스키드스티어", "밥캣", "작은 로더"],
    cardCue: "작은 몸으로 좁은 곳에서 일해요.", summary: "작은 몸으로 좁은 공사장에서 흙을 옮겨요.",
    cues: ["앞쪽에 바가지를 단 작은 로더예요.", "양옆의 팔로 바가지를 들어 올려요."],
    sourceUrl: "https://rent.cat.com/en_US/articles/construction-equipment-names?isLanguageMaster=true", tile: "#e8e7dd"
  },
  {
    id: "motor-grader", name: "모터 그레이더", englishName: "Motor Grader", body: "construction",
    aliases: ["그레이더", "땅 고르는 차"],
    cardCue: "땅을 평평하게 고르게 해요.", summary: "몸 가운데의 긴 날로 땅을 고르게 다듬어요.",
    cues: ["앞바퀴와 뒷바퀴 사이가 길어요.", "몸 가운데에 비스듬한 날이 보여요."],
    sourceUrl: "https://rent.cat.com/en_US/articles/road-construction-machines", tile: "#f0e7d5"
  },
  {
    id: "road-roller", name: "로드 롤러", englishName: "Road Roller", body: "construction",
    aliases: ["롤러", "로드롤러", "도로 롤러", "땅 다지는 차"],
    cardCue: "커다란 원통으로 꾹꾹 눌러요.", summary: "무거운 원통으로 땅과 도로를 단단하게 다져요.",
    cues: ["크고 둥근 원통이 바퀴처럼 굴러가요.", "원통이 넓어서 넓은 땅을 눌러요."],
    sourceUrl: "https://rent.cat.com/en_US/articles/road-construction-machines", tile: "#e9ead8"
  },
  {
    id: "asphalt-paver", name: "아스팔트 포장기", englishName: "Asphalt Paver", body: "construction",
    aliases: ["아스팔트 피니셔", "아스팔트피니셔", "포장기", "도로 포장기"],
    cardCue: "도로 위에 아스팔트를 펴요.", summary: "도로 위에 아스팔트를 고르게 펼쳐요.",
    cues: ["앞쪽에 아스팔트를 담는 큰 통이 있어요.", "뒤쪽의 넓은 장치로 평평하게 펴요."],
    sourceUrl: "https://rent.cat.com/en_US/articles/road-construction-machines", tile: "#e6e7df"
  },
  {
    id: "dump-truck", name: "덤프트럭", englishName: "Dump Truck", body: "construction",
    aliases: ["덤프 트럭", "덤프차", "덤프", "흙 나르는 차"],
    cardCue: "짐칸을 들어 흙을 내려요.", summary: "큰 짐칸에 흙과 돌을 싣고 공사장을 오가요.",
    cues: ["뒤쪽에 커다란 짐칸이 있어요.", "짐칸 앞쪽을 들어 짐을 내릴 수 있어요."],
    sourceUrl: "https://rent.cat.com/en_US/articles/construction-equipment-names?isLanguageMaster=true", tile: "#e7eadf"
  },
  {
    id: "concrete-mixer", name: "콘크리트 믹서 트럭", englishName: "Concrete Mixer Truck", body: "construction",
    aliases: ["레미콘", "레미콘차", "믹서트럭", "믹서차", "시멘트차"],
    cardCue: "둥근 통을 빙글빙글 돌려요.", summary: "콘크리트를 섞으며 공사장으로 실어 날라요.",
    cues: ["뒤쪽에 커다란 둥근 통이 있어요.", "통을 돌려 콘크리트가 잘 섞이게 해요."],
    sourceUrl: "https://www.liebherr.com/en-int/group/latest-news/exhibitions-events/bauma/exhibits/concrete-technology-7309870", tile: "#e5e9ef"
  },
  {
    id: "mobile-crane", name: "이동식 크레인", englishName: "Mobile Crane", body: "special",
    aliases: ["크레인차", "기중기", "이동식기중기", "기중기차"],
    cardCue: "긴 팔로 무거운 짐을 들어요.", summary: "바퀴로 이동해서 무거운 짐을 들어 올려요.",
    cues: ["바퀴 달린 몸 위에 긴 팔이 있어요.", "팔 끝에서 줄과 갈고리가 내려와요."],
    sourceUrl: "https://www.liebherr.com/en-gb/mobile-and-crawler-cranes/mobile-and-crawler-cranes-4284433", tile: "#f0e5d5"
  },
  {
    id: "tower-crane", name: "타워크레인", englishName: "Tower Crane", body: "special",
    aliases: ["타워 크레인", "탑 크레인", "높은 크레인"],
    cardCue: "높은 하늘에서 짐을 옮겨요.", summary: "높은 건물을 지을 때 무거운 짐을 들어 옮겨요.",
    cues: ["탑처럼 높은 기둥이 있어요.", "기둥 위에서 긴 팔이 뻗어 있어요."],
    sourceUrl: "https://www.liebherr.com/en-gb/group/products/solutions/heavy-duty-cranes/heavy-duty-cranes-4715547", tile: "#e5ebee"
  },
  {
    id: "crawler-crane", name: "크롤러 크레인", englishName: "Crawler Crane", body: "special",
    aliases: ["무한궤도 크레인", "궤도 크레인", "크롤러크레인"],
    cardCue: "넓은 궤도로 움직이는 크레인이에요.", summary: "넓은 궤도로 움직이며 크고 무거운 짐을 들어요.",
    cues: ["몸 아래에 넓은 띠 모양 궤도가 있어요.", "위로 길게 뻗은 팔을 살펴봐요."],
    sourceUrl: "https://www.liebherr.com/en-gb/mobile-and-crawler-cranes/mobile-and-crawler-cranes-4284433", tile: "#e8e9dc"
  },
  {
    id: "concrete-pump", name: "콘크리트 펌프카", englishName: "Concrete Pump Truck", body: "special",
    aliases: ["펌프카", "콘크리트펌프", "펌프차"],
    cardCue: "긴 관으로 콘크리트를 보내요.", summary: "긴 팔을 펼쳐 멀리 있는 곳으로 콘크리트를 보내요.",
    cues: ["팔이 여러 번 접혔다 펴져요.", "팔을 따라 콘크리트가 흐르는 관이 있어요."],
    sourceUrl: "https://www.liebherr.com/en-ph/concrete-technology/concrete-pumps/the-all-rounder/the-all-rounder-5943301", tile: "#e8e5ed"
  },
  {
    id: "tunnel-boring-machine", name: "TBM 터널 굴착기", englishName: "Tunnel Boring Machine", body: "special",
    aliases: ["티비엠 터널 굴착기", "TBM", "티비엠", "터널굴착기", "터널 보링 머신", "터널 뚫는 기계"],
    cardCue: "땅속에 긴 터널을 만들어요.", summary: "커다란 둥근 앞면을 돌려 땅속에 터널을 파요.",
    cues: ["커다란 둥근 앞부분을 살펴봐요.", "둥근 면의 여러 도구로 흙과 바위를 깎아요."],
    sourceUrl: "https://www.herrenknecht.com/fileadmin/user_upload/2010-10-15_Gotthard_project_report_en.pdf", tile: "#e2e8ec"
  },
  {
    id: "bucket-wheel-excavator", name: "버킷휠 굴착기", englishName: "Bucket-Wheel Excavator", body: "special",
    aliases: ["버킷 휠 굴착기", "버킷휠", "거대 굴착기", "배거", "바퀴 굴착기"],
    cardCue: "바가지가 달린 큰 바퀴가 돌아요.", summary: "거대한 바퀴의 여러 바가지로 흙과 광물을 계속 파요.",
    cues: ["큰 바퀴 둘레에 바가지가 줄지어 있어요.", "파낸 흙은 긴 운반 장치로 옮겨져요."],
    sourceUrl: "https://www.takraf.com/portfolio/detail/bucket-wheel-excavators/", tile: "#ece3d6"
  },
  {
    id: "mining-haul-truck", name: "광산용 대형 트럭", englishName: "Mining Haul Truck", body: "special",
    aliases: ["광산 덤프트럭", "광산 트럭", "광산덤프", "초대형 덤프", "초대형 트럭", "하울트럭"],
    cardCue: "아주 큰 몸으로 광산의 돌을 날라요.", summary: "광산에서 많은 흙과 돌을 한 번에 실어 나르는 큰 트럭이에요.",
    cues: ["아주 큰 바퀴와 높은 운전실을 살펴봐요.", "뒤쪽에 크고 넓은 짐칸이 있어요."],
    sourceUrl: "https://www.cat.com/en_US/by-industry/cross-industry-resources/hauling.html", tile: "#e8e3d8"
  },
  {
    id: "forest-harvester", name: "산림 수확기", englishName: "Forest Harvester", body: "special",
    aliases: ["벌목기", "벌목차", "하베스터", "산림하베스터", "임업용 하베스터"],
    cardCue: "긴 팔로 나무를 잡고 다듬어요.", summary: "숲에서 나무를 베고 가지를 정리하는 일을 해요.",
    cues: ["긴 팔 끝에 나무를 잡는 장치가 있어요.", "그 장치로 나무를 자르고 가지를 다듬어요."],
    sourceUrl: "https://www.komatsuforest.com/forest-machines/our-harvester-heads/s82", tile: "#e2eadb"
  }
].map((machine) => ({ ...machine, appearance: { label: `${machine.name}의 구조와 하는 일 · 사진은 실물 장비 예시`, change: "equipment" }, checkedAt: "2026-10-28" }));
