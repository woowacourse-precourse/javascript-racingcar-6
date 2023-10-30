import { MAX_NAME_LENGTH } from '../constants/numeric.js';

class UtilString extends String {
  /**
   * returns if the length of value is over the length
   * @param {string} value
   * @param {number} length
   * @returns {boolean}
   */
  static isOverMaxLength(value) {
    return value.length > MAX_NAME_LENGTH;
  }

  /**
   * returns if the value is empty or has only spaces
   * @param {string} value
   * @returns {boolean}
   */
  static isEmptyString(value) {
    const trimmed = value.trim();
    return trimmed.length === 0;
  }
}

export default UtilString;
