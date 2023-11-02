const MESSAGE = {
  nameQuery: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)",
  numberQuery: "시도할 횟수는 몇 회인가요?",
  gameStart: "실행 결과",
  theWinnerIs: "최종 우승자 : ",
};

const INPUT_LIMIT = {
  playerName: 5,
  playerNumber: 10,
  repeatCount: 100,
};

const ERROR_MESSAGE = {
  playerNameLengthLimit: `${INPUT_LIMIT.playerName}자 이하의 이름만 가능합니다.`,
  onePlayerOnly: "플레이어가 한 명입니다.",
  playerNameEmpty: "빈 이름이 있습니다.",
  playerNameDuplicated: "중복된 이름이 있습니다.",
  playerNumberLimit: `${INPUT_LIMIT.playerNumber}명 이하의 플레이어만 참여 가능합니다.`,
  repeatCountZero: "1 이상의 숫자를 입력해주세요.",
  repeatCountLimit: `${INPUT_LIMIT.repeatCount}회 이하만 실행 가능합니다.`,
  repeatCountNaN: "올바른 숫자를 입력해주세요.",
};

const POSITION_MARK = "-";

export { MESSAGE, ERROR_MESSAGE, INPUT_LIMIT, POSITION_MARK };
