import { ERROR_MESSAGE, SETTINGS } from '../constants/index.js';

class InputValidator {
  static validateCarName(carNames) {
    if (carNames.length === 0) {
      throw new Error(ERROR_MESSAGE.emptyName);
    }

    const uniqueCarNames = new Set();

    carNames.forEach((carName) => {
      if (carName.length > SETTINGS.maxNamingLength) {
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
    if (laps <= 0) {
      throw new Error(ERROR_MESSAGE.positive);
    }
    if (isNaN(laps)) {
      throw new Error(ERROR_MESSAGE.number);
    }
  }
}

export default InputValidator;
