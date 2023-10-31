import { ERRORS } from "../utils/constants.js";

class TryErrors {
  static checkInputNumber(input) {
    if (isNaN(input)) {
      throw new Error(`${ERRORS.ERROR} ${ERRORS.IS_NAN_ERROR}`);
    }

    const numberOfAttempts = parseInt(input, 10);
    return numberOfAttempts;
  }

  static checkNagativeNumber(input) {
    const number = parseInt(input, 10);

    if (number < 0) {
      throw new Error(`${ERRORS.ERROR} ${ERRORS.NEGATIVE_NUMBER_ERROR}`);
    }

    return number;
  }
}

export default TryErrors;
