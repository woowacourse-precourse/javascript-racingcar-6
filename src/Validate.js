export default class Validate {
  /**
   * 시도할 횟수 입력값 검증 함수
   * @param {string} repeatNumber
   * @returns {boolean}
   */
  static isNotValidNumber(repeatNumber) {
    return Number.isNaN(Number(repeatNumber));
  }
}
