import { ERROR } from "../util/constants.js";

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
    this.checkZero(tryNumber);
    this.checkType(tryNumber);
  }

  checkZero(tryNumber) {
    if (Number(tryNumber) === 0) {
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
