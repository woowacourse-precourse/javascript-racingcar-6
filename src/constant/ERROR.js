const ERROR = {
  EMPTY_INPUT: "[ERROR] 입력된 값이 없습니다",
  INVALID_CAR_NAMES:
    "[ERROR] 자동차 이름은 공백 없는 5자 이하 영문자만 가능합니다",
  DUPLICATE_CAR_NAME: "[ERROR] 자동차 이름은 중복되면 안 됩니다",
};

Object.freeze(ERROR);
export default ERROR;
