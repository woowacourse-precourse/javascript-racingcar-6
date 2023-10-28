import { ERROR_MESSAGE } from './Message';

const MOVABLE = 4;
const MAX_LENGTH = 5;
const REG_NUMBER = /^[0-9]+/;

/**
 * 입력한 자동차 이름 유효성 검사
 * @param {string} carNames
 * @returns {boolean}
 */
export function checkCarNames(carNames) {
  const carNameArr = carNames.split(',');

  carNameArr.forEach(carName => {
    if (carName.length > MAX_LENGTH) {
      return false;
    }
    if (carNameArr.indexOf(carName) != carNameArr.lastIndexOf(carName)) {
      return false;
    }
  });
  return true;
}

/**
 * 입력한 값이 숫자[0-9]인지 검사
 * @param {string} number
 * @returns {boolean}
 */
export function checkTryNumber(number) {
  if (!REG_NUMBER.test(parseInt(number))) {
    return false;
  }
  return true;
}
