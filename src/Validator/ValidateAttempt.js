import { ERROR_MESSAGE, REGEXP } from '../Constants/Constants.js';

class ValidateAttempt {
  isValidNumber = (attempt) => {
    const ATTEMPT_REGEX = REGEXP.attemptRegex.test(attempt);
    return ATTEMPT_REGEX;
  };

  isValidAttempt = (attempt) => {
    if (!this.isValidNumber(attempt)) throw new Error(ERROR_MESSAGE.numberError);
  };
}

export default ValidateAttempt;
