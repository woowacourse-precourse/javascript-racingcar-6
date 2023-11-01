import InputError from "../errors/InputError.js";
import { ERROR_MSG } from "../constants/Constants.js";

export default class InputValidator {
  static validateCarNames(carNames) {
    if (carNames.length === 0) {
      throw new InputError(ERROR_MSG.EMPTY_CAR_NAME);
    }

    if (carNames.some((name) => name.length < 1 || name.length > 5)) {
      throw new InputError(ERROR_MSG.INVALID_CAR_NAME_LENGTH);
    }

    if (new Set(carNames).size !== carNames.length) {
      throw new InputError(ERROR_MSG.DUPLICATE_CAR_NAME);
    }

    return true;
  }

  static validateRaceCount(raceCount) {
    if (!raceCount) {
      throw new InputError(ERROR_MSG.EMPTY_RACE_COUNT);
    }

    if (isNaN(Number(raceCount))) {
      throw new InputError(ERROR_MSG.INVALID_RACE_COUNT);
    }

    if (raceCount < 1) {
      throw new InputError(ERROR_MSG.INVALID_RACE_COUNT);
    }

    return true;
  }
}
