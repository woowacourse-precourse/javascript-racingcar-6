const ERROR_CAR_MESSAGE = {
  INVALID_INPUT_ERROR: "[ERROR]",
  INVALID_INPUT_CAR_NAME_OVER_ERRPR: "자동차 이름은 5자 이하만 가능합니다.",
  INVALID_INPUT_CAR_NAME_DUPLICATION_ERROR: "자동차 이름은 중복될 수 없습니다.",
  INVALID_INPUT_CAR_NAME_EMPTY_ERROR: "자동차 이름을 입력하지 않았습니다.",
  INVALID_INPUT_CAR_NAME_BLANK_ERROR: "자동차 이름에 공백이 포함되어 있습니다.",
  INVALID_INPUT_CAR_NAME_ENG_ERROR:
    "자동차 이름에 영어가 아닌 문자가 포함되어 있습니다.",
};

const ERROR_USER_INPUT_MESSAGE = {
  INVALID_INPUT_ERROR: "[ERROR]",
  INVALID_INPUT_USER_INPUT_EMPTY_ERROR: "시도할 횟수를 입력하지 않았습니다.",
  INVALID_INPUT_USER_INPUT_BLANK_ERROR:
    "시도할 횟수에 공백이 포함되어 있습니다.",
  INVALID_INPUT_USER_INPUT_ENG_ERROR:
    "시도할 횟수에 영어가 아닌 문자가 포함되어 있습니다.",
  INVALID_INPUT_USER_INPUT_ZERO_ERROR: "시도할 횟수는 0보다 커야 합니다.",
};

export { ERROR_CAR_MESSAGE, ERROR_USER_INPUT_MESSAGE };
