import InputError from '../errors/InputError';
import CustomString from './CustomString';
import { ERROR_MESSAGE } from '../constants';
import CustomArray from './CustomArray';

class Parser {
  /**
   * 콤마로 구분된 문자열을 배열로 변환하는 메소드.
   *
   * 빈 문자열이 들어올 경우 예외를 발생시킵니다.
   * @param {string} value 콤마로 구분된 문자열
   * @returns {string[]}
   */
  static stringToArray(value) {
    const splitted = this.splitByComma(value);

    if (CustomArray.hasEmpty(splitted)) {
      throw new InputError(ERROR_MESSAGE.noInput);
    }
    return splitted;
  }

  /**
   * 콤마로 문자열을 분리하는 메소드.
   *
   * 공백은 제거됩니다.
   *
   * 빈 문자열이 들어올 경우 예외를 발생시킵니다.
   * @param {string} value 콤마로 구분된 문자열
   * @returns {string[]}
   */
  static splitByComma(value) {
    if (CustomString.isEmpty(value)) throw new InputError(ERROR_MESSAGE.noInput);
    return value.split(',').map((str) => str.trim());
  }
}

export default Parser;
