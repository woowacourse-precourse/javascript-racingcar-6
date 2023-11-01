import { ERROR_MESSAGE } from '../constants/messages.js';
import UtilArray from './UtilArray.js';
import UtilString from './UtilString.js';

class Validator {
  /**
   * 자동차 이름이 유효한 값인지 검사합니다.
   * @param {string[]} carName 자동차 이름
   * @returns {{ isValid: boolean, reason: string }}
   */
  static isValidCarName(carNames) {
    if (carNames.some(UtilString.isOverMaxLength)) {
      return { isValid: false, reason: ERROR_MESSAGE.tooLongCarName };
    }

    if (UtilArray.hasDuplicated(carNames)) {
      return { isValid: false, reason: ERROR_MESSAGE.duplicateCarName };
    }

    return {
      isValid: true,
      reason: '',
    };
  }

  /**
   * 시도 횟수가 유효한 값인지 검사합니다.
   * @param {number} trialCount 시도 횟수
   * @returns {{ isValid: boolean, reason: string }}
   */
  static isValidTrialCount(trialCount) {
    if (trialCount < 1) {
      return { isValid: false, reason: ERROR_MESSAGE.tooSmallNumber };
    }
    if (Number.isNaN(trialCount)) {
      return { isValid: false, reason: ERROR_MESSAGE.invalidInput };
    }
    if (!Number.isInteger(trialCount)) {
      return { isValid: false, reason: ERROR_MESSAGE.notInteger };
    }

    return {
      isValid: true,
      reason: '',
    };
  }
}

export default Validator;
