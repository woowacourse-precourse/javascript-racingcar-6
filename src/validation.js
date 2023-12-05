import { MESSAGES } from './messages.js';

/**
 *
 * @param {string[]} carNames
 * @returns 자동차 이름 5자 이하 여부
 */
const isFiveOrLessLength = (carNames) => {
  let isFiveOrLess = true;

  carNames.forEach((carName) => {
    if (isMoreThanFive(carName.length)) {
      isFiveOrLess = false;
      return;
    }
  });

  return isFiveOrLess;
};

/**
 *
 * @param {number} number
 * @returns 숫자가 5 이하인 지 여부
 */
const isMoreThanFive = (number) => {
  return number > 5;
};

/**
 *
 * @param {string[]} carNames
 * @returns 차의 개수가 0인 지 여부
 */
const isNoneOfCar = (carNames) => {
  return carNames.length === 1 && carNames[0] === '';
};

/**
 *
 * @param {string[]} carNames
 * @returns 차의 이름 unique 여부
 */
const isUniqueOfCarName = (carNames) => {
  return carNames.length === new Set(carNames).size;
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
 * @param {string[]} carNames
 * 경주할 자동차 이름 입력 검증
 */
const validateCarsInput = (carNames) => {
  if (isNoneOfCar(carNames)) {
    throw new Error(MESSAGES.ERROR.NUMBER_OF_CARS_ZERO_EXCEPTION);
  }

  if (!isFiveOrLessLength(carNames)) {
    throw new Error(MESSAGES.ERROR.TOO_LONG_LENGTH_OF_CAR_NAME_EXCEPTION);
  }

  if (!isUniqueOfCarName(carNames)) {
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
    throw new Error(MESSAGES.ERROR.NOT_A_NUMBER_OF_ATTEMPTS_EXCEPTION);
  }
};

export { validateCarsInput, validateNumberOfAttemptsInput };
