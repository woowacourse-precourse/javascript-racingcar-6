import { DEFAULT, ERROR } from './constants/index.js';

class Validation {
  constructor() {}

  validateCar(input) {
    const cars = typeof input === 'string' ? input.trim().split(',') : [''];

    if (cars.length < DEFAULT.CARS_MIN_LENGTH) {
      throw new Error(ERROR.NOT_PLURAL);
    }

    cars.forEach((value) => {
      if (
        value.length < DEFAULT.NAME_MIN_LENGTH ||
        value.length > DEFAULT.NAME_MAX_LENGTH
      ) {
        throw new Error(ERROR.NOT_UNDER_LEN);
      }
    });

    const set = new Set(cars);
    if (set.size !== cars.length) {
      throw new Error(ERROR.NOT_UNIQUE);
    }

    return cars;
  }

  validateRound(input) {
    const numRegExp = /^[1-9][0-9]*$/;
    if (!numRegExp.test(input)) {
      throw new Error(ERROR.NOT_NUMBER);
    }

    return Number(input);
  }
}

export default Validation;
