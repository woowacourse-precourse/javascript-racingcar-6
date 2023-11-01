const ERROR = {
  EMPTY_INPUT: "[ERROR] 입력한 값이 공백입니다",
  INPUT_ENDS_WITH_COMMA: "[ERROR] 입력한 값이 쉼표로 끝나면 안 됩니다",
  INVALID_CAR_NAMES:
    "[ERROR] 자동차 이름은 공백 없는 5자 이하 영문자만 가능합니다",
  DUPLICATE_CAR_NAME: "[ERROR] 자동차 이름은 중복되면 안 됩니다",
  INVALID_MOVE_ATTEMPT_COUNT: "[ERROR] 1 이상의 자연수만 입력해 주세요",
};

Object.freeze(ERROR);
export default ERROR;
