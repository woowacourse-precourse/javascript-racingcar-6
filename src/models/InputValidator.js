import { ERROR_MESSAGE } from '../constants/index.js';

class InputValidator {
  static validateCarName(carNames) {
    if (carNames.length === 0) {
      throw new Error(ERROR_MESSAGE.emptyName);
    }

    const uniqueCarNames = new Set();

    carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(ERROR_MESSAGE.tooLongName);
      }
      if (!carName.length) {
        throw new Error(ERROR_MESSAGE.emptyName);
      }
      if (uniqueCarNames.has(carName)) {
        throw new Error(ERROR_MESSAGE.duplicationName);
      }
      uniqueCarNames.add(carName);
    });
  }

  static validateLaps(laps) {
    if (!laps) {
      throw new Error('[ERROR] 시도 횟수는 0보다 커야 합니다.');
    }
    if (Number.isNaN(laps)) {
      throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
    }
  }
}

export default InputValidator;
