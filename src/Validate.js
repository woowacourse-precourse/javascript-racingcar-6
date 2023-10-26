export default class Validate {
  /**
   * 시도할 횟수 입력값 검증 함수
   * @param {string} number
   * @returns {boolean}
   */
  static isPositiveInteger(number) {
    const parsedNumber = Number(number);
    return Number.isInteger(parsedNumber) && parsedNumber > 0;
  }
}
