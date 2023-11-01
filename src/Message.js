export const MESSAGES = Object.freeze({
  INPUT_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ",
  INPUT_TRY_NUMBER: "시도할 회수는 몇회인가요? ",
  RESULT: "실행 결과",
  WINNER: "최종 우승자 : ",
});

export const ERRORS = Object.freeze({
  CAR_NAMES_NOT_INPUTED: "[ERROR] 자동차 이름이 입력되지 않았습니다.",
  CAR_NAMES_DUPLICATED: "[ERROR] 중복된 이름이 있습니다.",
  CAR_NAMES_LENGTH_TOO_LONG: "[ERROR] 자동차 이름은 5자 이하만 가능합니다.",
  CAR_NAMES_COUNT_OUT_OF_RANGE:
    "[ERROR] 자동차 이름을 2개 이상 9개 이하로 입력해주세요.",
  TRY_COUNT_NOT_INPUTED: "[ERROR] 시도할 횟수가 입력되지 않았습니다.",
  TRY_COUNT_OUT_OF_RANGE: "[ERROR] 시도할 회수는 1이상 10 이하여야 합니다.",
  TRY_COUNT_NOT_NUMBER: "[ERROR] 숫자로 입력해주세요.",
});
