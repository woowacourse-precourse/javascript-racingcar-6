import { ERROR_MESSAGE } from './Message';

export const MOVABLE = 4;
const MAX_LENGTH = 5;

class ValidationCheck {
  /**
   * 입력한 자동차 이름 유효성 검사
   * @param {String} carNames
   */
  checkCarNames(carNames) {
    const carArr = carNames.split(',');

    carArr.forEach(carName => {
      if (carName.length > MAX_LENGTH) {
        throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
      }
      if (carArr.indexOf(carName) != carArr.lastIndexOf(carName)) {
        throw new Error(DUPLICATE_ERROR + carName);
      }
    });
  }
}

export default ValidationCheck;
