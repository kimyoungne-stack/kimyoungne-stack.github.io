// ============================================================
// JY Factory 앱 목록 — 앱을 추가하려면 APPS 맨 아래에 한 덩어리만 복사해서 넣으면 됩니다.
//
//  id     : 영문 짧은 이름 (주소에 쓰임, 겹치면 안 됨)
//  cat    : 카테고리 키 (아래 CATS 중 하나). 앱이 하나도 없는 카테고리는 화면에 안 나옵니다.
//  status : "live" = 출시됨(Google Play 버튼 켜짐) / "test" = 테스트 중 / "soon" = 출시 예정
//  play   : Google Play 패키지명 (live일 때만 링크로 쓰임)
//  icon   : icons 폴더의 그림 파일. 그림이 없으면 icon 대신 mono: "약자" (금색 글자 로고)
//  name / short / desc : [한국어, English]   short = 목록에 보이는 한 줄 설명
//  tags   : 상세 화면 아래 작은 키워드
// ============================================================

window.CATS = [
  { key: "invest", name: ["투자 · 금융", "Finance"] },
  { key: "alarm", name: ["알람", "Alarm"] },
  { key: "travel", name: ["여행", "Travel"] },
  { key: "game", name: ["게임", "Games"] },
  { key: "tools", name: ["생산성 · 도구", "Productivity & Tools"] },
  { key: "fortune", name: ["운세", "Fortune"] },
  { key: "beauty", name: ["뷰티", "Beauty"] },
  { key: "health", name: ["건강", "Health"] },
  { key: "life", name: ["생활", "Lifestyle"] },
  { key: "photo", name: ["사진 · 영상", "Photo & Video"] },
  { key: "edu", name: ["교육", "Education"] },
  { key: "kids", name: ["키즈", "Kids"] },
];

window.APPS = [
  {
    id: "etf-dividend-note", cat: "invest", status: "soon", play: "com.jy.etfshare",
    icon: "icons/etf-dividend-note.jpg",
    name: ["ETF 배당노트", "ETF Dividend Note"],
    short: ["내 ETF 배당과 시세를 한눈에", "Your ETF dividends at a glance"],
    desc: ["관심 ETF와 내 보유 종목의 배당·시세를 한눈에. 배당락·가격 알림과 예산 포트폴리오 짜기까지, 기록은 휴대폰 안에만 저장합니다.", "Track dividends and prices for your ETFs and holdings, with ex-dividend and price alerts and a budget portfolio planner. Everything stays on your phone."],
    tags: ["ETF", "배당 일정", "포트폴리오"]
  },
  {
    id: "harucall", cat: "alarm", status: "soon", play: "",
    icon: "icons/harucall.jpg", bg: "#FFF6E0",
    name: ["하루콜: 내 목소리 알람", "HaruCall: My Voice Alarm"],
    short: ["내 목소리로 깨워 주는 아침 알람", "A morning alarm in your own voice"],
    desc: ["내 목소리로 깨우고, 오늘 날씨와 할 일을 읽어 주는 아침 알람.", "A morning alarm that wakes you in your own voice and reads out today's weather and to-dos."],
    tags: ["목소리 알람", "오늘 날씨", "할 일"]
  },
  {
    id: "voyage", cat: "travel", status: "live", play: "com.youngne.travellog",
    icon: "icons/voyage.jpg",
    name: ["여정 · VOYAGE", "VOYAGE"],
    short: ["여행 기록을 영상으로 남기는 여행 일기장", "A travel journal that becomes a video"],
    desc: ["사진·지출·맛집·이동 경로를 한 곳에 기록하고, 여행이 끝나면 자막이 들어간 여행 영상으로 만들어 주는 여행 일기장.", "A travel journal for photos, spending, places and routes that turns your trip into a captioned video."],
    tags: ["여행 기록", "가계부", "여행 영상"]
  },
  {
    id: "world-conquest", cat: "game", status: "soon", play: "",
    mono: "WC",
    name: ["월드 컨퀘스트", "World Conquest"],
    short: ["세계를 점령하는 땅따먹기 게임", "Conquer the world, line by line"],
    desc: ["선을 그어 땅을 차지하는 땅따먹기 게임. 세계 12개국을 점령하며 캐릭터 카드를 모아요.", "A line-drawing territory game: conquer 12 countries around the world and collect character cards."],
    tags: ["땅따먹기", "세계 정복", "캐릭터 카드"]
  },
  {
    id: "idea-note", cat: "tools", status: "live", play: "com.youngne.ideanote",
    icon: "icons/idea-note.png",
    name: ["아이디어 노트", "Idea Note"],
    short: ["말하면 AI가 정리해 주는 노트", "Talk, and AI tidies your notes"],
    desc: ["생각나는 대로 말하면 AI가 제목·핵심·할 일로 정리해 주는 노트. 정리는 휴대폰 안에서만 하고, 10개 언어로 제공합니다.", "Just talk — on-device AI turns your rambling into tidy notes with titles, key points and to-dos. Available in 10 languages."],
    tags: ["음성 메모", "AI 정리", "할 일"]
  },
  {
    id: "phone-cleaner", cat: "tools", status: "live", play: "kr.younglae.cleaner",
    icon: "icons/phone-cleaner.png",
    name: ["폰정리", "Phone Cleaner"],
    short: ["사진·파일 정리로 저장 공간 확보", "Clean photos and files, free up space"],
    desc: ["비슷한 사진 묶기, 스크린샷·큰 동영상·중복 파일 정리, 안 쓰는 앱 찾기. 지운 사진은 30일 안에 되살릴 수 있어요.", "Group similar photos, clear screenshots, large videos and duplicate files, and find unused apps — with a 30-day undo."],
    tags: ["사진 정리", "중복 파일", "용량 확보"]
  },
  {
    id: "easyremote", cat: "tools", status: "soon", play: "",
    mono: "ER",
    name: ["이지리모트", "EasyRemote"],
    short: ["폰으로 내 PC를 원격 조작", "Control your PC from your phone"],
    desc: ["밖에서도 스마트폰으로 내 윈도우 노트북 화면을 보고, 마우스와 키보드로 바로 조작하는 원격 제어 앱.", "See and control your Windows laptop from your phone, from anywhere, with mouse and keyboard."],
    tags: ["원격 제어", "PC 화면", "마우스·키보드"]
  },
  {
    id: "astrology", cat: "fortune", status: "soon", play: "kr.younglae.shamanism",
    icon: "icons/astrology.jpg",
    name: ["한국 점성술", "Korean Astrology"],
    short: ["사주로 보는 오늘의 운세와 궁합", "Daily fortune and compatibility"],
    desc: ["사주팔자로 보는 오늘의 운세, 운세 달력, 두 사람의 궁합까지. 8개 언어로 제공합니다.", "Daily fortune from your Four Pillars, a fortune calendar and compatibility readings, in 8 languages."],
    tags: ["사주", "운세 달력", "궁합"]
  },
  {
    id: "nail-makeup", cat: "beauty", status: "live", play: "com.youngne.nailmakeup",
    icon: "icons/nail-makeup.jpg",
    name: ["토토의 네일&메이크업", "Toto's Nail & Makeup"],
    short: ["내 사진에 네일·메이크업 미리 입혀 보기", "Try nails and makeup on your photo"],
    desc: ["내 손톱 사진에 네일아트를, 얼굴 사진에 메이크업을 미리 입혀 보는 가상 뷰티 앱.", "Try nail art and makeup virtually on your own photos before you book."],
    tags: ["가상 네일", "가상 메이크업", "3D 젤네일"]
  },
  {
    id: "home-training", cat: "health", status: "soon", play: "",
    mono: "10",
    name: ["10분 홈트레이닝", "10-Min Home Workout"],
    short: ["3D 코치와 하루 10분 홈트", "Ten minutes a day with a 3D coach"],
    desc: ["3D 캐릭터가 동작을 보여 주는 하루 10분 홈트레이닝. 세트·휴식 타이머와 운동 기록을 8개 언어로 제공합니다.", "Ten minutes a day with a 3D coach showing every move, plus set and rest timers and a workout log, in 8 languages."],
    tags: ["홈트", "운동 기록", "3D 코치"]
  },
];
