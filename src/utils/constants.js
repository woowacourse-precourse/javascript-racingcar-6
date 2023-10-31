export const GAME_RULE = Object.freeze({
  CAR_NAME_LENGTH: 5,
  FORWARD_STANDARD: 4,
});

export const ERRORS = Object.freeze({
  ERROR: "[ERROR]",
  EMPTY_INPUT_ERROR: "입력값이 비어 있습니다.",
  IS_NAN_ERROR: "숫자가 아닌 값이 입력되었습니다.",
  NEGATIVE_NUMBER_ERROR: "시도 횟수는 음수가 될 수 없습니다.",
  NAME_LENGTH_EXCEEDED_ERROR: `자동차 이름은 ${GAME_RULE.CAR_NAME_LENGTH}자 이하여야 합니다.`,
});

export const COMMAND = Object.freeze({
  START_MESSAGE:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  TRY_NUMBER_QUESTION: "시도할 횟수는 몇 회인가요?\n",
  RESULT_MESSAGE: "최종 우승자 : ",
});
