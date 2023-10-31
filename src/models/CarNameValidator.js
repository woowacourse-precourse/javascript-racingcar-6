import { ERROR_MESSAGE } from '../constants';

class CarNameValidator {
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
}

export default CarNameValidator;
