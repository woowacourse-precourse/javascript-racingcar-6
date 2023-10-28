import InputError from '../errors/InputError';
import CustomString from './EnhancedString';
import { ERROR_MESSAGE } from '../constants';

class Parser {
  /**
   * 콤마로 구분된 문자열을 배열로 변환하는 메소드.
   *
   * 공백은 제거됩니다.
   *
   * 빈 문자열이 들어올 경우 예외를 발생시킵니다.
   * @param {string} value 콤마로 구분된 문자열
   * @returns {string[]}
   */
  static stringToArray(value) {
    if (CustomString.isEmpty(value)) throw new InputError(ERROR_MESSAGE.noInput);
    return value.split(',');
  }
}

export default Parser;
