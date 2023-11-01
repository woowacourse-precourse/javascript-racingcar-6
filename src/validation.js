import { MESSAGES } from './messages.js';

/**
 *
 * @param {string} carName
 * @returns 자동차 이름 5자 이하 여부
 */
const isFiveOrLessLength = (carName) => {
  return carName.length <= 5;
};

/**
 *
 * @param {Array} carArr
 * @returns 차의 개수가 0인 지 여부
 */
const isNoneOfCar = (carArr) => {
  return carArr.length === 1 && carArr[0] === '';
};

/**
 *
 * @param {Array} carArr
 * @returns 차의 이름 unique 여부
 */
const isUniqueOfCarName = (carArr) => {
  return carArr.length === new Set(carArr).size;
};

/**
 *
 * @param {number | string} numberOfAttempts
 * @returns 숫자 여부
 */
const isDigit = (numberOfAttempts) => {
  return !isNaN(numberOfAttempts);
};

/**
 *
 * @param {Array} carArr
 * 경주할 자동차 이름 입력 검증
 */
const validateCarNamesInput = (carArr) => {
  if (isNoneOfCar(carArr)) {
    throw new Error(MESSAGES.ERROR.NUMBER_OF_CARS_ZERO_EXCEPTION);
  }

  carArr.forEach((car) => {
    if (!isFiveOrLessLength(car)) {
      throw new Error(MESSAGES.ERROR.CAR_NAME_LENGTH_OUT_OF_BOUND_EXCEPTION);
    }
  });

  if (!isUniqueOfCarName(carArr)) {
    throw new Error(MESSAGES.ERROR.DUPLICATION_CAR_NAME_EXCEPTION);
  }
};

/**
 *
 * @param {number | string} numberOfAttempts
 * 시도할 횟수 입력 검증
 */
const validateNumberOfAttemptsInput = (numberOfAttempts) => {
  if (!isDigit(numberOfAttempts)) {
    throw new Error(MESSAGES.ERROR.NUMBER_OF_ATTEMPTS_TYPE_EXCEPTION);
  }
};

export { validateCarNamesInput, validateNumberOfAttemptsInput };
