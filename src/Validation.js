import { ERROR_MESSAGE } from './Constant.js';

class Validation {
  static checkMoveCount(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGE.nothing);
    }

    if (Number.isNaN(Number(input))) {
      throw new Error(ERROR_MESSAGE.number);
    }

    if (!Number.isInteger(Number(input))) {
      throw new Error(ERROR_MESSAGE.integar);
    }

    if (Number(input) < 1) {
      throw new Error(ERROR_MESSAGE.small);
    }
  }
}

export default Validation;
