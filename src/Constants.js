// 변수 설정
const GAME_MESSAGE = {
  CAR_NAME_LIST:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n",
  PLAY_GAME: "시도할 횟수는 몇 회인가요? \n",
  RESULT: "실행 결과",
  WINNER: "최종 우승자 : ",
};

const ERROR_MESSAGE = {
  // ERROR: "[ERROR]",
  NO_NUMBER: "[ERROR] 숫자가 잘못된 형식입니다.",
  NO_INPUT: "[ERROR] 입력값이 없습니다.",
  OVER_FIVE: "[ERROR] 5자 이하로 입력해주세요.",
  IS_SPACING: "[ERROR] 공백없이 입력해주세요.",
  IS_REPEAT: "[ERROR] 중복된 이름을 제거해주세요.",
};

export { GAME_MESSAGE, ERROR_MESSAGE };
