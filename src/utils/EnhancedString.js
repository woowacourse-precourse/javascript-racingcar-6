class CustomString extends String {
  /**
   * returns if the length of value is over the length
   * @param {string} value
   * @param {number} length
   * @returns {boolean}
   */
  static isOverLength(value, length) {
    return value.length > length;
  }

  /**
   * returns if the value is empty
   * @param {string} value
   * @returns {boolean}
   */
  static isEmpty(value) {
    return value.length === 0;
  }
}

export default CustomString;
