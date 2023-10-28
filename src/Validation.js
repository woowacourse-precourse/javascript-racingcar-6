import { ERROR_MESSAGE } from './Message';

const MOVABLE = 4;
const MAX_LENGTH = 5;
const REG_NUMBER = /^[0-9]+/;

/**
 * 입력한 자동차 이름 유효성 검사
 * @param {string} carNames
 * @returns {string}
 */
export function checkCarNames(carNames) {
  if (carNames === '') {
    return ERROR_MESSAGE.NO_CAR_NAME;
  }

  const carNameArr = carNames.split(',');
  carNameArr.forEach(carName => {
    if (carName.length > MAX_LENGTH) {
      return ERROR_MESSAGE.LENGTH_ERROR;
    }
    if (carNameArr.indexOf(carName) !== carNameArr.lastIndexOf(carName)) {
      return ERROR_MESSAGE.DUPLICATE_ERROR;
    }
  });

  return '';
}

/**
 * 입력한 값이 숫자[0-9]인지 검사
 * @param {string} number
 * @returns {string}
 */
export function checkTryNumber(number) {
  if (number === '') {
    return ERROR_MESSAGE.NO_NUMBER;
  }
  if (!REG_NUMBER.test(parseInt(number))) {
    return ERROR_MESSAGE.NOT_NUMBER_ERROR;
  }
  return '';
}
