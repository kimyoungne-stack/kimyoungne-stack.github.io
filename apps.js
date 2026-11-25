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
    desc: ["전 세계 ETF 1,500개 이상의 배당률과 수익률을 한눈에 비교하고, 내 예산으로 매달 얼마의 배당이 들어오는지 미리 계산해 보는 앱입니다.\n· 연 배당률과 1년·3년 수익률 순위, 매주·매월·분기·반기·연 1회 등 배당 주기별 보기\n· 관심·보유 ETF의 배당락일 달력과 3일 전 알림, 목표가·급등락 알림\n· ‘그때 샀다면 지금 얼마?’ 가상 수익률 계산기 (배당 재투자·세후 선택)\n· 예산과 비중을 정하면 월별 예상 배당금을 계산하고, 매달 배당이 들어오는 조합 만들기\n· 내 보유 종목 평가손익, ETF 최대 3개 비교, 홈 화면 위젯\n모든 수치는 참고용이며 투자 권유가 아닙니다. 기록은 휴대폰 안에만 저장됩니다.", "Compare dividend yields and returns of 1,500+ ETFs worldwide, and see in advance how much dividend your budget would pay each month.\n· Yield and 1- and 3-year return rankings, viewable by payout cycle (weekly, monthly, quarterly and more)\n· Ex-dividend calendar for your ETFs with 3-day-ahead alerts, plus price-target and big-move alerts\n· A what-if calculator: ‘What if I had bought then?’, with reinvestment and after-tax options\n· Set a budget and weights to see monthly expected dividends and build a mix that pays every month\n· Your holdings’ gains and losses, side-by-side comparison of up to 3 ETFs, and a home-screen widget\nAll figures are for reference only and are not investment advice. Your records stay on your phone."],
    tags: ["ETF", "배당 일정", "포트폴리오"]
  },
  {
    id: "harucall", cat: "alarm", status: "soon", play: "",
    icon: "icons/harucall.jpg", bg: "#FFF6E0",
    name: ["하루콜: 내 목소리 알람", "HaruCall: My Voice Alarm"],
    short: ["내 목소리로 깨워 주는 아침 알람", "A morning alarm in your own voice"],
    desc: ["알람이 울리면 기계 목소리 대신 내가 녹음한 목소리로 오늘 날씨와 일정, 운세까지 읽어 주는 아침 알람입니다.\n· 짧은 문장을 녹음해 두면 아침 인사와 날씨를 내 목소리로 브리핑해 줍니다\n· 잠금화면에서 ‘그만’ 하고 말하면 알람이 꺼지고, ‘조금만 더’ 하면 미뤄집니다\n· 오늘 날씨에 맞춰 옷을 골라 주는 ‘오늘 뭐 입지’\n· 내 하루에 영향 가는 소식만 골라서 읽어 주기\n· 꾸준히 쓸수록 자라는 캐릭터 ‘새싹이’\n위치·걸음·일정은 휴대폰 안에만 남고, 회원가입도 필요 없습니다.", "Instead of a robotic voice, your alarm reads out today’s weather, schedule and fortune in your own recorded voice.\n· Record a few short sentences and get your morning greeting and weather in your own voice\n· Say ‘stop’ on the lock screen to dismiss the alarm, or ‘a little more’ to snooze\n· ‘What to wear’: outfit suggestions matched to the day’s weather\n· Only the news that affects your day, read aloud\n· A little character, Saessak, that grows the more you use it\nLocation, steps and schedule stay on your phone, and there is no sign-up."],
    tags: ["목소리 알람", "오늘 날씨", "할 일"]
  },
  {
    id: "voyage", cat: "travel", status: "live", play: "com.youngne.travellog",
    icon: "icons/voyage.jpg",
    name: ["여정 · VOYAGE", "VOYAGE"],
    short: ["여행 기록을 영상으로 남기는 여행 일기장", "A travel journal that becomes a video"],
    desc: ["사진, 쓴 돈, 먹은 곳, 시간, 지나온 길까지 여행의 모든 순간을 한 곳에 모으고, 여행이 끝나면 그 기록을 자막과 움직임이 들어간 한 편의 영상으로 만들어 주는 여행 일기장입니다.\n· 사진을 고르면 찍은 시간과 장소가 자동으로 채워지고, 동영상 클립도 함께 넣을 수 있어요\n· 현지 통화로 적으면 원화로 자동 환산되는 여행 가계부, 동행자와 N빵 정산, 엑셀(CSV) 내보내기\n· 영수증을 찍으면 합계·가게 이름·날짜·품목을 읽어 가계부에 입력 (인터넷 없이 휴대폰 안에서 처리)\n· 환율 비교, 메뉴판·간판 사진 번역, 돌림판·사다리 타기\n· 다녀간 곳이 지도 위에 번호로, 지나온 길은 금빛 선으로 표시되는 이동 경로 지도\n· 오프닝부터 엔딩까지 만들어 주는 여행 영상: 세 가지 분위기, 세로·가로·정사각 비율, 배경음악 선택, 자막 번역\n회원가입 없이 모든 기록이 휴대폰 안에만 저장되고, 10개 언어를 지원합니다.", "Voyage gathers every moment of a trip — photos, spending, places you ate, times and the path you took — and turns it into a captioned, cinematic video when the trip ends.\n· Pick a photo and its time and place fill in automatically; add video clips too\n· A travel budget that converts local currency to won, splits bills with friends and exports to CSV\n· Scan a receipt to read the total, shop, date and items on your phone, no internet needed\n· Exchange-rate comparison, menu and sign translation from a photo, plus a roulette and ladder game\n· A route map with numbered stops and your path drawn in gold\n· A trip video from opening to ending: three styles, three aspect ratios, music of your choice and translated captions\nNo account needed; everything stays on your phone, in 10 languages."],
    tags: ["여행 기록", "가계부", "여행 영상"]
  },
  {
    id: "world-conquest", cat: "game", status: "soon", play: "",
    mono: "WC",
    name: ["월드 컨퀘스트", "World Conquest"],
    short: ["세계를 점령하는 땅따먹기 게임", "Conquer the world, line by line"],
    desc: ["손가락으로 선을 그어 땅을 차지하는 땅따먹기 게임입니다. 세계 12개국을 하나씩 점령하며 캐릭터 카드를 모아 보세요.\n· 화면을 누른 채 끌면 캐릭터가 손가락을 따라가고, 떼면 멈춥니다\n· 나라마다 입문부터 최고 난도까지 5단계, 단계를 깨면 카드 1장을 얻습니다\n· 점령한 땅 아래로 보상 그림이 서서히 드러납니다\n· 사람·동물·문화재 등 카드 테마를 설정에서 바꿀 수 있어요\n출시를 준비 중입니다.", "A line-drawing territory game: claim land by drawing lines with your finger and collect character cards as you conquer 12 countries around the world.\n· Press and drag and your character follows your finger; release to stop\n· Five levels per country, from beginner to the toughest, and one card for each level cleared\n· A reward picture is revealed beneath the land you capture\n· Switch the card theme — people, animals, cultural heritage and more — in settings\nComing soon."],
    tags: ["땅따먹기", "세계 정복", "캐릭터 카드"]
  },
  {
    id: "idea-note", cat: "tools", status: "live", play: "com.youngne.ideanote",
    icon: "icons/idea-note.png",
    name: ["아이디어 노트", "Idea Note"],
    short: ["말하면 AI가 정리해 주는 노트", "Talk, and AI tidies your notes"],
    desc: ["생각나는 대로 말하면 AI가 제목, 핵심, 할 일로 깔끔하게 정리해 주는 노트입니다. 정리는 휴대폰 안에서만 이루어져 내용이 밖으로 나가지 않습니다.\n· 말로 남기는 음성 메모를 글로 바꿔 한눈에 보이도록 정리\n· 제목·핵심 요약·할 일을 자동으로 나눠 줍니다\n· 정리에 인터넷이 필요 없는 휴대폰 안 AI\n· 10개 언어로 제공", "Just talk, and the AI turns your rambling into tidy notes with a title, key points and to-dos. Everything is organised on your phone, so your notes never leave it.\n· Turn voice memos into text and neat notes at a glance\n· Titles, key-point summaries and to-dos are split out automatically\n· On-device AI that needs no internet to organise\n· Available in 10 languages"],
    tags: ["음성 메모", "AI 정리", "할 일"]
  },
  {
    id: "phone-cleaner", cat: "tools", status: "live", play: "kr.younglae.cleaner",
    icon: "icons/phone-cleaner.png",
    name: ["폰정리", "Phone Cleaner"],
    short: ["사진·파일 정리로 저장 공간 확보", "Clean photos and files, free up space"],
    desc: ["휴대폰 저장공간을 무엇이 차지하는지 한눈에 보여 주고, 지울 만한 것을 골라 한 번에 정리해 주는 앱입니다. 사진은 휴대폰 밖으로 나가지 않고, 지운 사진은 30일 안에 되살릴 수 있습니다.\n· 사진·스크린샷·동영상·문서·음악·설치파일별 용량 보기\n· 비슷한 사진과 연사, 비슷한 동영상, 흐린 사진·눈 감은 사진 골라내기\n· 큰 동영상·큰 파일 순위, 중복 파일 찾기, 다운로드 폴더 정리\n· 왼쪽으로 밀면 지울 후보, 오른쪽은 남기기로 한 장씩 넘기며 정리\n· 사진·동영상 화질은 거의 그대로 용량만 줄이기\n· 날짜·장소·내용별 앨범 자동 분류, 즐겨찾기 사진은 지울 후보에서 자동 제외\n· 안 쓰는 앱과 캐시 많은 앱 찾기, 저장공간 부족 알림\n몰래 지우지 않습니다. 지운 사진은 휴지통으로 가며 30일 안에 골라서 되살릴 수 있어요.", "Phone Cleaner shows what is taking up your storage and helps you clear it in one go. Your photos never leave the phone, and deleted photos can be restored within 30 days.\n· Storage by type: photos, screenshots, videos, documents, music and installers\n· Find similar photos, burst shots, similar videos, blurry and closed-eye photos\n· Rankings of large videos and files, duplicate finder and download-folder cleanup\n· Swipe left to mark for deletion, right to keep — clean up one photo at a time\n· Shrink photos and videos with almost no loss of quality\n· Automatic albums by date, place and content; favourite photos are never suggested for deletion\n· Find unused and cache-heavy apps, with low-storage alerts\nNothing is deleted behind your back: deleted photos go to the trash and can be restored within 30 days."],
    tags: ["사진 정리", "중복 파일", "용량 확보"]
  },
  {
    id: "easyremote", cat: "tools", status: "soon", play: "",
    mono: "ER",
    name: ["이지리모트", "EasyRemote"],
    short: ["폰으로 내 PC를 원격 조작", "Control your PC from your phone"],
    desc: ["밖에서도 스마트폰으로 내 윈도우 노트북 화면을 보고, 마우스와 키보드처럼 바로 조작하는 원격 제어 앱입니다.\n· 노트북에서 프로그램을 켜면 나오는 연결 코드를 폰에 입력해 접속\n· 화면과 입력은 폰과 노트북이 직접 연결되어 오가며 암호화됩니다\n· 톡 = 클릭, 톡톡 = 더블클릭, 꾹 = 오른쪽 클릭, 끌기 = 드래그, 두 손가락으로 확대와 스크롤\n· 공유기 설정(포트포워딩) 없이 사용\n개발 중이며 출시를 준비하고 있습니다.", "See your Windows laptop’s screen from your phone, wherever you are, and control it as if with a mouse and keyboard.\n· Start the program on the laptop and enter its connection code on your phone\n· Screen and input travel over a direct, encrypted connection between the phone and the laptop\n· Tap = click, double tap = double-click, long press = right-click, drag = drag, two fingers to zoom and scroll\n· No router setup or port forwarding needed\nIn development and coming soon."],
    tags: ["원격 제어", "PC 화면", "마우스·키보드"]
  },
  {
    id: "astrology", cat: "fortune", status: "live", play: "kr.younglae.shamanism",
    icon: "icons/astrology.jpg",
    name: ["한국 점성술", "Korean Astrology"],
    short: ["사주로 보는 오늘의 운세와 궁합", "Daily fortune and compatibility"],
    desc: ["생년월일과 태어난 시각으로 사주팔자를 세워, 매일의 운세와 타고난 성향을 쉬운 말로 풀어 주는 운세 앱입니다.\n· 오늘의 운세: 총운·애정·직장·재물 등 12가지 분야 점수와 매일 아침 브리핑, 음성으로 듣기와 홈 화면 위젯\n· 사주팔자: 타고난 본바탕, 기운의 세기와 균형, 대운·올해·이달·오늘의 흐름, 개운법(색·방향·숫자)\n· 운세 달력: 이달의 좋은 날과 목적별 좋은 날 찾기, 두 사람의 달력 겹쳐 보기, 휴대폰 캘린더에 추가\n· 궁합: 소통·생활 리듬·협력·서로 채워 주는 기운의 네 가지로, 연인·부부·친구·가족·동료 등 관계별 풀이\n· 관상·손금: 사진으로 보는 전통 풀이 (사진은 휴대폰 안에서만 분석)\n· 토정비결식 신년운세, 299가지 꿈 사전으로 보는 꿈해몽\n8개 언어를 지원합니다. 풀이는 전통 명리를 바탕으로 한 오락·참고용 콘텐츠이며, 건강·투자·법률 등 중요한 결정은 전문가와 상의하세요.", "Korean Astrology builds your Four Pillars of Destiny (Saju) from your birth date and time and reads your daily fortune and innate nature in plain language.\n· Today’s fortune: scores in 12 areas from overall luck to love, work and money, a morning briefing, spoken readout and a home-screen widget\n· Saju: your innate nature, the strength and balance of your energy, ten-year, yearly, monthly and daily flow, and remedies with colours, directions and numbers\n· Fortune calendar: good days this month and by purpose, two people’s calendars overlaid, add to your phone calendar\n· Compatibility: four views — communication, rhythm, cooperation and how you fill each other’s needs — for partners, spouses, friends, family and coworkers\n· Face and palm reading from a photo (photos are analysed on your phone only)\n· A Tojeong-style year reading and dream meanings from a 299-entry dream dictionary\nAvailable in 8 languages. Readings are entertainment and reference content based on traditional Saju; consult a professional for health, investment or legal decisions."],
    tags: ["사주", "운세 달력", "궁합"]
  },
  {
    id: "nail-makeup", cat: "beauty", status: "live", play: "com.youngne.nailmakeup",
    icon: "icons/nail-makeup.jpg",
    name: ["토토의 네일&메이크업", "Toto's Nail & Makeup"],
    short: ["내 사진에 네일·메이크업 미리 입혀 보기", "Try nails and makeup on your photo"],
    desc: ["진짜 손처럼 만든 3D 손 위에 젤네일을 칠하고, 보석과 파츠를 붙이고, 카메라로 내 손에 바로 입혀 볼 수 있는 가상 뷰티 앱입니다. 네일숍에 가기 전에 미리 디자인해 보세요.\n· 3D 네일 꾸미기: 크림·펄·글리터·매트·젤리·오로라·크롬·자석 마감, 그라데이션·프렌치·마블, 손톱 모양 6가지, 큐빅·진주·3D 파츠\n· 룩북 277개: 요즘 유행하는 젤네일 디자인을 눌러 바로 내 스타일로 고쳐 쓰기\n· 내 손에 입혀 보기: 카메라로 손톱을 찾아 디자인을 입히고 전후 비교, 사진 저장\n· 메이크업: AI 가상 모델 얼굴 또는 내 셀카에 립·블러셔·아이섀도·눈썹·헤어 컬러, 메이크업 룩 30가지\n· 퍼스널 컬러 찾기, 말로 쓰면 디자인을 만들어 주는 ‘말로 디자인’, 처음 해 보는 분을 위한 ‘네일 배우기’\n· 네일 라운지에서 다른 사람들의 디자인 구경하고 내 디자인 올리기\n카메라와 사진은 기기 안에서만 처리되며, 9개 언어를 지원합니다.", "A virtual beauty app: paint gel nails on a realistic 3D hand, add rhinestones and charms, then try the design on your own hand with the camera — before you book the salon.\n· 3D nail studio: cream, pearl, glitter, matte, jelly, aurora, chrome and cat-eye finishes, ombre, French and marble, 6 nail shapes, crystals, pearls and 3D charms\n· A 277-look lookbook of trending gel designs you can tap and adapt to your own style\n· Live try-on: the camera finds your nails and applies the design, with before/after compare and photo saving\n· Makeup on AI-generated model faces or your selfie: lips, blush, eyeshadow, brows, hair colour, 30 makeup looks\n· A personal colour finder, ‘Describe it’ to generate designs from words, and a step-by-step ‘Learn nails’ guide for beginners\n· Nail Lounge to browse other people’s designs and share yours\nCamera and photos are processed on your device. 9 languages supported."],
    tags: ["가상 네일", "가상 메이크업", "3D 젤네일"]
  },
  {
    id: "home-training", cat: "health", status: "soon", play: "",
    mono: "10",
    name: ["10분 홈트레이닝", "10-Min Home Workout"],
    short: ["3D 코치와 하루 10분 홈트", "Ten minutes a day with a 3D coach"],
    desc: ["3D 캐릭터가 동작을 직접 보여 주는 하루 10분 홈트레이닝 앱입니다.\n· 동작마다 3D 코치가 자세를 움직여 보여 주고, 힘이 들어가는 근육을 빛으로 표시해 줍니다\n· 세트·휴식 타이머로 따라 하기만 하면 되는 운동 진행\n· 운동 기록 남기기\n· 8개 언어 지원\n출시를 준비 중입니다.", "Ten minutes a day with a 3D coach who shows you every move.\n· For each exercise the 3D coach demonstrates the pose and highlights the muscles doing the work\n· Set and rest timers, so you just follow along\n· A workout log\n· Available in 8 languages\nComing soon."],
    tags: ["홈트", "운동 기록", "3D 코치"]
  },
];
