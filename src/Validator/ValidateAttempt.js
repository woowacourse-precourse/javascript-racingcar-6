import { ERROR_MESSAGE, REGEXP } from '../constants/Constants';

class ValidateAttempt {
  isValidNumber = (input) => {
    const ATTEMPT_REGEX = REGEXP.attemptRegex.test(input);
    return ATTEMPT_REGEX;
  };

  isValidAttempt = (input) => {
    if (!this.isValidNumber(input)) throw new Error(ERROR_MESSAGE.numberError);
  };
}

export default ValidateAttempt;
