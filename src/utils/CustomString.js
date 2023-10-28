import { MAX_NAME_LENGTH } from '../constants';

class CustomString extends String {
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
  static isEmpty(value) {
    return value.length === 0;
  }
}

export default CustomString;
