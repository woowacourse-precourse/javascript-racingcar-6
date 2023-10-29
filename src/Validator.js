import { MIN_NAME_LENGTH, MAX_NAME_LENGTH } from './lib/constants.js';
import LOGS from './lib/logs.js';

class Validator {
  static validateEachLength(str) {
    // 자동차 이름 길이 1 이상 5 이하
    if (!(str.length >= MIN_NAME_LENGTH && str.length <= MAX_NAME_LENGTH))
      throw new Error(LOGS.INVALID_INPUT1);
  }

  static validateDuplicate(arr) {
    const set = new Set(arr);
    if (set.size !== arr.length) throw new Error(LOGS.INVALID_INPUT2);
  }

  static validateTryIsNumber(str) {
    if (!/^[1-9]\d*$/.test(str)) throw new Error(LOGS.INVALID_INPUT3); // 자연수인지 체크
  }
}

export default Validator;
