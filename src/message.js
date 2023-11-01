const GAME_MSG = Object.freeze({
  GET_CARS_NAME:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  GET_TRY_TIMES: "시도할 횟수는 몇 회인가요?\n",
  EXECUTION_RESULT: "실행 결과",
  GAME_WINNER: "최종 우승자 : ",
});

const ERROR_MSG = Object.freeze({
  NO_INPUT: "[ERROR] 입력값이 없습니다.",
  NO_CAR_NAME: "[ERROR] 입력되지 않은 자동차 이름이 있습니다.",
  CAR_NAME_OVER_LENGTH: "[ERROR] 자동차 이름은 5자 이하로 입력해주세요.",
  CAR_NAME_IS_DUPLICATION: "[ERROR] 중복된 자동차 이름이 있습니다.",
  // CAR_NAME_SPLIT_COMMA: "[ERROR] 자동차 이름은 쉼표로 구분해주세요.",
  TRY_TIMES_MORE_THAN_ZERO: "[ERROR] 시도 횟수는 1이상으로 입력해주세요.",
  TRY_TIMES_NUMBER: "[ERROR] 시도횟수는 숫자로 입력해주세요.",
});

export { GAME_MSG, ERROR_MSG };
