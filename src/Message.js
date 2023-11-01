const GAME_MESSAGES = Object.freeze({
  START: "경주할 자동차 이름을 입력하세요.(이름은 윔표(,) 기준으로 구분) \n",
  ATTEMPT: "시도할 횟수는 몇 회인가요? \n",
  RESULT: "실행 결과",
  WINNER: "최종 우승자 : "
});

const ERROR_MESSAGES = Object.freeze({
  OVER_FIVE: "[ERROR] 자동차 이름은 5자 이하만 가능합니다.",
  SOLO_NAME: "[ERROR] 두개 이상의 자동차가 필요합니다.",
  EMPTY_NAME: "[ERROR] 올바른 이름을 입력해야합니다.",
  NOT_NUMBER: "[ERROR] 숫자가 아닌 값을 입력하셨습니다. 숫자를 입력해야합니다.",
  UNDER_ONE: "[ERROR] 1 이상의 숫자만 입력이 가능합니다."
});

export { GAME_MESSAGES, ERROR_MESSAGES };