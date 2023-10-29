const GAME_MESSAGE = {
  START: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
  RESULT: "실행 결과\n",
  WINNER: "최종 우승자 : ",
};

const ERROR_MESSAGE = {
  IS_LENGTH: "[ERROR] 5자 이하로 입력해주세요.",
  IS_STRING: "[ERROR] 문자열로 입력해주세요.",
  IS_COMMA: "[ERROR] 쉼표로 구분해주세요.",
  IS_NUMBER: "[ERROR] 숫자로 입력해주세요.",
  IS_ERROR: "[ERROR] 게임에 문제가 있습니다. 코드를 확인해주세요.",
};

export { GAME_MESSAGE, ERROR_MESSAGE };
