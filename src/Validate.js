import { ERROR, RULE } from './constant.js';

export default class Validate {
  static isEmpty(string) {
    return string === '';
  }

  static isInvalidLength(string) {
    return string.length > RULE.maxNameLength;
  }

  static isPositiveInteger(number) {
    const parsedNumber = Number(number);

    return Number.isInteger(parsedNumber) && parsedNumber > 0;
  }

  static checkJoinItem(joinItem) {
    if (this.isInvalidLength(joinItem) || this.isEmpty(joinItem)) {
      throw new Error(ERROR.participant);
    }
  }

  static checkRepeatNumber(repeatNumber) {
    if (!this.isPositiveInteger(repeatNumber)) {
      throw new Error(ERROR.repeatNumber);
    }
  }
}
