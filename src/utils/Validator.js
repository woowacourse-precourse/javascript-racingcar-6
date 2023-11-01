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
import { CAR_NAME, RACE_COUNT } from "../constants/car.js";

class Validator {
  static validateCarName(carNameList) {
    if (carNameList.length === CAR_NAME.NO_INPUT_LENGTH)
      throw new NoInputError(ERROR_MESSAGE.NO_INPUT);
    if (carNameList.length === CAR_NAME.ONE_NAME)
      throw new OneNameError(ERROR_MESSAGE.ONE_NAME);
    if (new Set(carNameList).size !== carNameList.length)
      throw new DuplicatedNameError(ERROR_MESSAGE.DUPLICATED_NAME);
    if (carNameList.some((carName) => carName.length > CAR_NAME.MAX_LENGTH))
      throw new LongNameError(ERROR_MESSAGE.LONG_NAME);
  }

  static validateRaceCount(raceCount) {
    if (raceCount === RACE_COUNT.NO_INPUT)
      throw new NoInputError(ERROR_MESSAGE.NO_INPUT);
    if (isNaN(raceCount)) 
      throw new NotNumberError(ERROR_MESSAGE.NOT_NUMBER);
    if (raceCount < RACE_COUNT.MIN_VALUE)
      throw new InvalidMinNumberError(ERROR_MESSAGE.INVALID_MIN_NUMBER);
    if (!Number.isInteger(raceCount))
      throw new NotIntegerError(ERROR_MESSAGE.NOT_INTEGER);
  }
}

export default Validator;
