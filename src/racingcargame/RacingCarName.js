import { ERROR } from '../constants.js';
import CarNameValidation from '../validation/CarNameValidation.js';

class RacingCarName {
  static validate(name) {
    if (CarNameValidation.checkIfEmpty(name)) throw new Error(ERROR.EMPTY_CAR_NAME);
    if (CarNameValidation.checkIfInvalid(name)) throw new Error(ERROR.INVALID_CAR_NAME);
    if (CarNameValidation.checkIfDuplicate(name)) throw new Error(ERROR.DUPLICATE_CAR_NAME);
    if (CarNameValidation.checkIfOverLength(name)) throw new Error(ERROR.OVER_CAR_NAME_LENGTH);
  }
}

export default RacingCarName;
