import { MAX_NAME_LENGTH, ERROR } from './Constant.js';

class CheckError {
  static isLessThanMaxNameLength(name) {
    if (name.length > MAX_NAME_LENGTH) throw new Error(ERROR.MORE_THAN_MAX);
  }

  static isNumber(number) {
    if (!number) throw new Error(ERROR.WRONG_NUMBER);
  }
}

export default CheckError;