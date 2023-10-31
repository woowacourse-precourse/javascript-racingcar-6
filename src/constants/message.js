export const INPUT_MESSAGE = Object.freeze({
  CAR_NAME: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  RACE_COUNT: "시도할 횟수는 몇 회인가요?\n",
});

export const OUTPUT_MESSAGE = Object.freeze({
  RESULT_START: "\n실행 결과",
  WINNER: "최종 우승자 : ",
});

export const ERROR_MESSAGE = Object.freeze({
  COMMON: "[ERROR]",
  NO_INPUT: "입력된 내용이 없습니다.",
  LONG_NAME: "이름이 5글자를 초과합니다.",
  DUPLICATED_NAME: "중복된 이름이 존재합니다.",
  ONE_NAME: "최소 두 대의 자동차가 필요합니다.",
  NOT_NUMBER: "숫자가 입력되지 않았습니다.",
  INVALID_MIN_NUMBER: "1이상의 수가 입력되지 않았습니다.",
  NOT_INTEGER: "정수 값이 입력되지 않았습니다.",
});
