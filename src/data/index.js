// Graph dummy data

// User dummy data
export const users = [
  {
    index: Math.floor(Math.random() * 10),
    id: "John Brown",
    name: 32,
    role: ["관리자"],
    nickname: "Tester",
    level: 1,
    loggedAt: Date.now()
  },
  {
    index: Math.floor(Math.random() * 10),
    id: "John Blue",
    name: 32,
    role: ["관리자"],
    nickname: "Tester",
    level: 2,
    loggedAt: Date.now()
  },
  {
    index: Math.floor(Math.random() * 10),
    id: "John Red",
    name: 32,
    role: ["관리자"],
    nickname: "Tester",
    level: 0,
    loggedAt: Date.now()
  }
];

export const debates = [
  {
    roomId: Math.floor(Math.random() * 10),
    channel: "스포츠",
    status: "진행중",
    title: "본 의회는 동물실험을 금지해야 한다.",
    createdAt: Date.now(),
    userId: "parkoon"
  },
  {
    roomId: Math.floor(Math.random() * 10),
    channel: "스포츠",
    status: "진행중",
    title: "대마초를 합법화해야 하는가?",
    createdAt: Date.now(),
    userId: "parkoon"
  },
  {
    roomId: Math.floor(Math.random() * 10),
    channel: "스포츠",
    status: "진행중",
    title: "프로야구, 불문율은 필요한가.",
    createdAt: Date.now(),
    userId: "parkoon"
  },
  {
    roomId: Math.floor(Math.random() * 10),
    channel: "스포츠",
    status: "진행중",
    title: "e스포츠는 올림픽 정식 종목에 포함될 수 있는가.",
    createdAt: Date.now(),
    userId: "parkoon"
  },
  {
    roomId: Math.floor(Math.random() * 10),
    channel: "스포츠",
    status: "진행중",
    title: "박태환의 올림픽 출전 결정은 바람직한가",
    createdAt: Date.now(),
    userId: "parkoon"
  }
];

export const qna = [
  {
    index: Math.floor(Math.random() * 10),
    author: "guest",
    title: "이곳은 테스트 페이지 입니까?",
    createdAt: Date.now(),
    status: "대기"
  }
];

export const qnaDetail = {
  writer: "홍길동",
  createdAt: "1990.09.17",
  answerd: false,
  title: "제목 제목 제목",
  content:
    "군사법원의 조직·권한 및 재판관의 자격은 법률로 정한다. 언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다. 근로자는 근로조건의 향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을 가진다. 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다. 국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을 도모함으로써 농·어민의 이익을 보호한다.",
  comment: "구글링 하세요"
};
