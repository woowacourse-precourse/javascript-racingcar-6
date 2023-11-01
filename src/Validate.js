class Validate {
  static carRegex = /^[^,]+(,[^,]+)+$/;
  /** @param {string} input 차 목록 문자열을 입력받아 검증 후 차 목록 문자 배열을 반환하는 메서드 */
  static carNames(input) {
    if (!this.carRegex.test(input)) throw new Error("[ERROR]");
    const results = input.split(",");
    results.forEach((result) => {
      if (result.length > 5) throw new Error("[ERROR]");
    });
    return results;
  }
  /** @param {string} input 숫자 문자열을 입력받아 검증 후 숫자 타입으로 반환하는 메서드*/
  static isNumber(input) {
    const result = Number(input);
    if (isNaN(result)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return result;
  }
  /** @param {number} randInt 입력 숫자가 4 이상일 때 true를 반환하는 메서드*/
  static isForward(randInt) {
    return randInt > 3;
  }
}

export default Validate;
