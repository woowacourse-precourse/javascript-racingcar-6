import { ERROR_MESSAGE } from './Constants.js';

class Validation {
  static inputCarName(inputcars) {
    const cars = inputcars.split(',');
    const carSet = new Set(cars);

    if (!inputcars.includes(',')) {
      throw new Error(ERROR_MESSAGE.commaError);
    }
    if (inputcars.includes(' ')) {
      throw new Error(ERROR_MESSAGE.spaceError);
    }
    if (cars.some(car => car.length > 5)) {
      throw new Error(ERROR_MESSAGE.lengthError);
    }
    if (carSet.size !== cars.length) {
      throw new Error(ERROR_MESSAGE.duplicationError);
    }
    if (cars.length === 1) {
      throw new Error(ERROR_MESSAGE.singleError);
    }
  }

  static inputTryCount(count) {
    if (count.includes(' ')) {
      throw new Error(ERROR_MESSAGE.spaceError);
    }
    if (count.trim() === '') {
      throw new Error(ERROR_MESSAGE.inputError);
    }
    if (isNaN(count)) {
      throw new Error(ERROR_MESSAGE.typeError);
    }
  }
}

export default Validation;
