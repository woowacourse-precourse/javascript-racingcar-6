import InputError from '../errors/InputError.js';
import UtilString from './UtilString.js';
import { ERROR_MESSAGE } from '../constants/index.js';
import UtilArray from './UtilArray.js';

class Parser {
  /**
   * 콤마로 구분된 문자열을 배열로 변환하는 메소드.
   *
   * 빈 문자열이 들어올 경우 예외를 발생시킵니다.
   * @param {string} value 콤마로 구분된 문자열
   * @returns {string[]}
   */
  static stringToArray(value) {
    if (UtilString.isEmptyString(value)) throw new InputError(ERROR_MESSAGE.noInput);
    const splitted = value.split(',').map((str) => str.trim());

    if (UtilArray.hasEmpty(splitted)) {
      throw new InputError(ERROR_MESSAGE.noInput);
    }
    return splitted;
  }

  /**
   * 문자열을 정수로 변환하는 메소드.
   * @param {string} value 숫자로 변환할 문자열
   * @returns {number} 정수
   */
  static stringToNumber(value) {
    if (UtilString.isEmptyString(value)) throw new InputError(ERROR_MESSAGE.noInput);

    return Number(value);
  }
}

export default Parser;
