export const GAME_MESSAGE = Object.freeze({
  GAME_START:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  INPUT_REPEAT_NUMBER: "시도할 횟수는 몇 회인가요?\n",
  GAME_RESULT: "실행 결과",
  GAME_WINNER: "최종 우승자 : ",
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_NAME_LENGTH: "[ERROR] 자동차 이름은 최대 5자만 가능합니다.",
  NOT_ONLY_NUMBER: "[ERROR] 숫자가 잘못된 형식입니다.",
});
