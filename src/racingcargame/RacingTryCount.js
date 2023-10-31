import { ERROR } from '../constants.js';
import TryCountValidation from '../validation/TryCountValidation.js';

class RacingTryCount {
  static validate(count) {
    if (TryCountValidation.checkIfInvalid(count)) throw new Error(ERROR.INVALID_COUNT);
    if (TryCountValidation.checkIfZeroOrLess(count))
      throw new Error(ERROR.MUST_ENTER_A_NUMBER_OVER_ZERO);
  }
}

export default RacingTryCount;
