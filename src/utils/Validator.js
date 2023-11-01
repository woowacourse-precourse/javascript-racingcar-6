import {
  MESSAGE,
  StaticChar,
  StaticNumber,
  ERROR_MESSAGE,
} from "../model/Constant.js";

const InputValidator = {
  validateRacingCarName(input) {
    input.forEach((car) => {
      if (car.length > StaticNumber.POSSIBLE_CAR_NAME_LENGTH) {
        throw new Error(ERROR_MESSAGE.INPUT_LENGTH_ERROR);
      }
      if (car.trim() == StaticChar.CAR_NAME_BLANK) {
        throw new Error(ERROR_MESSAGE.INPUT_BLANK_ERROR);
      }
    });
  },

  validateRacingAttempt(input) {
    if (input < StaticNumber.POSSIBLE_MIN_RACE_ATTEMPT) {
      throw new Error(ERROR_MESSAGE.INPUT_NUMBER_NEGATIVE_ERROR);
    }
    if (Number.isInteger(input) === false) {
      throw new Error(ERROR_MESSAGE.INPUT_NUMBER_ERROR);
    }
  },
};

export default InputValidator;
