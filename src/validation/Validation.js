class Validation {
  
  // 사용자가 입력한 차 이름 입력값 검증
  static validateCarNameInput(input) {
    this.isNoComma(input);
    this.isemptyInput(input);
  }

  // 입력값에 ','가 있는지 검증
  static isNoComma(input) {
    if (!input.includes(',')) {
      throw new Error('[ERROR] ,가 없거나 하나의 차만 입력하셨습니다.');
    }
  }

  // 입력을 안하진 않았는지 검증
  static isemptyInput(input) {
    if (!input) {
      throw new Error('[ERROR] 값을 입력하지 않으셨습니다.');
    }
  }
}
export default Validation;
