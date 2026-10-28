# Car Atlas handoff

작업 경로: `C:\Users\USER\.codex\.chatgpt-projects\car-atlas` (원래 sea-atlas 프로젝트 미러의 형제 폴더).

사용자는 기존 Atlas를 참고한 새 Car Atlas MVP 생성을 승인했다. 대상은 3~10세, 한국 브랜드 승용 세단/SUV, 현재 국내 판매 차종의 최신 외형이다. 상세 제원은 제외하고 이름/사진/짧은 관찰 설명을 중심으로 한다. 외형 경계는 풀체인지와 페이스리프트이고, 단순 연식 변경은 새 외형이 아니다.

16종/28장. 최신 외형의 재사용 가능 사진을 확보하지 못한 아반떼·투싼·그랜저·토레스 대신 코나·스포티지·싼타페·EV5를 수록했다. K5/GV70/싼타페/EV5는 각 1장, 나머지 12종은 각 2장이다.

Luna가 사진 원본/라이선스/공개용 축소본을 수급했다. Terra가 28장 원본을 육안 검토하고 공식 설명과 대조했다. 부모는 전체 콘택트시트와 앱 화면을 확인했다. 액티언 거울 반사 사진은 교체했고 정상 후면을 재확인했다. 싼타페는 태국 시장 사양으로 정정했다. 해외 사진이 한국의 모든 트림/연식 세부와 같다고 주장하지 않는다. 제조사 공식 이미지와 모든 사진을 나란히 놓고 시각 대조한 것은 아니다.

진입점: `index.html`, `styles.css`, `app.js`, `data/cars.js`, `data/image-sources.json`. `scripts/verify.mjs`/`build.mjs`/`serve.mjs`가 검증·공개 빌드·루프백 미리보기다. 의존성 설치 불필요.

검증 기록과 스크린샷은 `work/`에 보존한다. 사용자는 MVP 완료 뒤 다른 Atlas와 동일하게 개인 GitHub 저장소 생성과 Pages 공개 배포를 요청했다. 기본 저장소는 `https://github.com/JJapShe/car-atlas`, 공개 주소는 `https://jjapshe.github.io/car-atlas/`다. main 푸시가 `.github/workflows/deploy-pages.yml`의 검증/빌드/dist 배포를 실행한다. Actions 성공만으로 완료하지 말고 해당 커밋의 공개 데이터·사진 및 PC/모바일 화면을 확인한다.

이전 Sites 비공개 미리보기는 유지한다. 해당 링크와 `.openai/hosting.json`은 원래 미리보기용이며 GitHub Pages 배포에는 필요하지 않다. 이 대화의 프로젝트 소속 자체는 원래 sea-atlas이며 소스만 이 새 폴더에서 작업했다.
