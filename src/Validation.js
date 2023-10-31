import { ERROR_MESSAGE } from './Message';

const MOVABLE = 4;
const MAX_LENGTH = 5;
const REG_NUMBER = /[^0-9]+/;

/**
 * 입력한 자동차 이름 유효성 검사
 * @param {string} carNames
 */
export function checkCarNames(carNames) {
  if (!carNames || carNames === ' ' || carNames === ',') {
    throw new Error(ERROR_MESSAGE.NO_CAR_NAME);
  }

  const carNameArr = carNames.split(',');
  for (const carName of carNameArr) {
    if (carName.length > MAX_LENGTH) {
      throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
    }
    if (carNameArr.indexOf(carName) !== carNameArr.lastIndexOf(carName)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_ERROR);
    }
  }

  return;
}

/**
 * 입력한 값이 숫자[0-9]인지 검사
 * @param {string} number
 */
export function checkTryNumber(number) {
  if (!number || number === ' ') {
    throw new Error(ERROR_MESSAGE.NO_NUMBER);
  }
  if (REG_NUMBER.test(Number(number))) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER_ERROR);
  }
  return;
}

/**
 * 파라미터가 MOVABLE 이상인지 확인
 * @param {number} randomNumber
 */
export function checkRandomNumber(randomNumber) {
  if (randomNumber < 4) {
    return false;
  }
  return true;
}
