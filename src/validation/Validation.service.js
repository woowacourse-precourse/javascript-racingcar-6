import { CAR_NAME_LENGTH, ERROR_MESSAGE, MINIMUM_TRIES } from '../constants.js';

export class ValidationService {
  validateCarNamesLength(cars) {
    cars.forEach((car) => {
      if (
        car.length > CAR_NAME_LENGTH.max ||
        car.length < CAR_NAME_LENGTH.min
      ) {
        throw new Error(ERROR_MESSAGE.length);
      }
    });
  }

  validateCarsUnique(cars) {
    cars.forEach((car, index) => {
      if (cars.indexOf(car) !== index) {
        throw new Error(ERROR_MESSAGE.unique);
      }
    });
  }

  validateTriesIsNumber(tries) {
    if (Number.isNaN(tries)) {
      throw new Error(ERROR_MESSAGE.nan);
    }
  }

  validateTriesInRange(tries) {
    if (tries < MINIMUM_TRIES) {
      throw new Error(ERROR_MESSAGE.range);
    }
  }
}
