import {
  NoInputError,
  LongNameError,
  DuplicatedNameError,
  OneNameError,
  NotNumberError,
  InvalidMinNumberError,
  NotIntegerError,
} from "./Error.js";
import { ERROR_MESSAGE } from "../constants/message.js";

class Validator {
  static validateCarName(carNameList) {
    if (carNameList.length === 0) throw new NoInputError(ERROR_MESSAGE.NO_INPUT);
    if (carNameList.some((carName) => carName.length > 5)) throw new LongNameError(ERROR_MESSAGE.LONG_NAME);
    if (new Set(carNameList).size !== carNameList.length) throw new DuplicatedNameError(ERROR_MESSAGE.DUPLICATED_NAME);
    if (carNameList.length === 1) throw new OneNameError(ERROR_MESSAGE.ONE_NAME);
  }

  static validateRaceCount(raceCount) {
    if (raceCount === "") throw new NoInputError(ERROR_MESSAGE.NO_INPUT);
    if (isNaN(raceCount)) throw new NotNumberError(ERROR_MESSAGE.NOT_NUMBER);
    if (raceCount < 1) throw new InvalidMinNumberError(ERROR_MESSAGE.INVALID_MIN_NUMBER);
    if (!Number.isInteger(raceCount)) throw new NotIntegerError(ERROR_MESSAGE.NOT_INTEGER);
  }
}

export default Validator;
