import { DEFAULT, ERROR } from './constants/index.js';

class Validation {
  constructor() {}

  validateCar(cars) {
    if (cars.length < DEFAULT.CARS_MIN_LENGTH) {
      throw new Error(ERROR.NOT_PLURAL);
    }

    cars.forEach((value) => {
      if (
        value.length < DEFAULT.NAME_MIN_LENGTH &&
        value.length > DEFAULT.NAME_MAX_LENGTH
      ) {
        throw new Error(ERROR.NOT_UNDER_LEN);
      }
    });

    const set = new Set(cars);
    if (set.size !== cars.length) {
      throw new Error(ERROR.NOT_UNIQUE);
    }
  }

  validateRound(round) {
    if (Number.isNaN(round)) throw new Error(ERROR.NOT_NUMBER);

    round = Number(round);
    if (round < 0 || !Number.isInteger(round)) {
      throw new Error(ERROR.NOT_INTEGER);
    }
  }
}

export default Validation;
