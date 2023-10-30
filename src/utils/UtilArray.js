import UtilString from './UtilString.js';

class UtilArray extends Array {
  /**
   * returns if the array is empty or has space
   * @param {string[]} value
   * @returns {boolean}
   */
  static hasEmpty(value) {
    return value.length === 0 || value.some((str) => UtilString.isEmptyString(str));
  }

  /**
   * returns if the array has duplicated elements
   * @param {string[]} value
   * @returns {boolean}
   */
  static hasDuplicated(value) {
    return new Set(value).size !== value.length;
  }
}

export default UtilArray;
