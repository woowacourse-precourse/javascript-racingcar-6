import {
  DELIMITER,
  CAR_NAME_MAX_LENGTH,
  ERROR_MESSAGE,
} from "../constant/constant.js";

const InputValidator = {
  validateCarNames(carNames) {
    const carNameArray = carNames.split(DELIMITER);
    this.validateCarArray(carNameArray);
    this.validateArray(carNameArray, this.validateCarNameLength);
    return carNames;
  },
  validateTryCount(count) {
    this.isNumber(count);
    this.isBiggerThanZero(count);
    return count;
  },
  // 자동차는 1대라도 있어야 한다.
  validateCarArray(array) {
    if (!array) {
      throw new Error(ERROR_MESSAGE.inValidCarArray);
    }
  },
  // 자동차 이름은 5자 이하여야한다.
  validateCarNameLength(carName) {
    if (carName.length > CAR_NAME_MAX_LENGTH) {
      throw new Error(ERROR_MESSAGE.inValidCarName);
    }
  },
  // 배열과 주어진 콜백함수를 받아서 배열의 각 원소에 대해 콜백함수를 실행한다.
  validateArray(array, callback) {
    array.forEach((element) => {
      callback(element);
    });
  },
  // 숫자인지 확인한다.
  isNumber(count) {
    if (isNaN(count)) {
      throw new Error(ERROR_MESSAGE.inValidNumber);
    }
  },
  // 주어진 숫자는 0 이상의 정수여야 한다.
  isBiggerThanZero(count) {
    if (!Number.isInteger(Number(count)) || Number(count) < 0) {
      throw new Error(ERROR_MESSAGE.inValidNumber);
    }
  },
};

export default InputValidator;
