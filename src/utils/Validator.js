import { ERROR_MESSAGE, MAX_NAME_LENGTH } from '../constants';
import CustomString from './EnhancedString';

class Validator {
  /**
   * 자동차 이름이 유효한 값인지 검사합니다.
   * @param {string[]} carName 자동차 이름
   * @returns {{ isValid: boolean, reason: string }}
   */
  static isValidCarName(carName) {
    if (carName.some((str) => CustomString.isOverLength(str, MAX_NAME_LENGTH))) {
      return { isValid: false, reason: ERROR_MESSAGE.tooLongCarName };
    }

    if (new Set(carName).size !== carName.length) {
      return { isValid: false, reason: ERROR_MESSAGE.duplicateCarName };
    }

    return {
      isValid: true,
      reason: '',
    };
  }
}

export default Validator;
