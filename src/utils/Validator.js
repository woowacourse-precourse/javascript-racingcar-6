import { ERROR_MESSAGE } from '../constants';
import CustomArray from './CustomArray';
import CustomString from './CustomString';

class Validator {
  /**
   * 자동차 이름이 유효한 값인지 검사합니다.
   * @param {string[]} carName 자동차 이름
   * @returns {{ isValid: boolean, reason: string }}
   */
  static isValidCarName(carName) {
    if (carName.some(CustomString.isOverMaxLength)) {
      return { isValid: false, reason: ERROR_MESSAGE.tooLongCarName };
    }

    if (CustomArray.hasDuplicated(carName)) {
      return { isValid: false, reason: ERROR_MESSAGE.duplicateCarName };
    }

    return {
      isValid: true,
      reason: '',
    };
  }
}

export default Validator;
