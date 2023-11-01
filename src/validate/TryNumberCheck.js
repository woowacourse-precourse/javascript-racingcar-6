import { ERROR } from '../util/constants.js';

class TryNumberCheck {
  validate(tryNumber) {
    try {
      this.checkTryNumber(tryNumber);
      return tryNumber;
    } catch (error) {
      throw error;
    }
  }

  checkTryNumber(tryNumber) {
    this.checkPositiveInteger(tryNumber);
    this.checkType(tryNumber);
  }

  checkPositiveInteger(tryNumber) {
    if (Number(tryNumber) <= 0 || Number(tryNumber) % 1 !== 0) {
      throw ERROR.tryNumberZero;
    }
  }

  checkType(tryNumber) {
    if (isNaN(Number(tryNumber))) {
      throw ERROR.tryNumberIntType;
    }
  }
}

export default TryNumberCheck;
