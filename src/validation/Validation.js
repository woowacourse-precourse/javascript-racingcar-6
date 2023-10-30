class Validation {
  // 사용자가 입력한 차 이름 입력값 검증
  static validateCarNameInput(input) {
    this.isNoComma(input);
    this.isemptyInput(input);
  }
  // 각 차이름 검증
  static validateCarNames(carNames) {
    this.validateDuplicateCarName(carNames);
    for (let index in carNames) {
      this.isNoInputafterComma(carNames[index]);
      this.isexceedsFiveCharacters(carNames[index]);
    }
  }

  // 입력값에 ','가 있는지 검증
  static isNoComma(input) {
    if (!input.includes(",")) {
      throw new Error("[ERROR] ,가 없거나 하나의 차만 입력하셨습니다.");
    }
  }

  // 입력을 안하진 않았는지 검증
  static isemptyInput(input) {
    if (!input) {
      throw new Error("[ERROR] 값을 입력하지 않으셨습니다.");
    }
  }

  // 쉼표 뒤에 아무것도 입력하지 않았을 때 에러 발생
  static isNoInputafterComma(carName) {
    if (carName === "") {
      throw new Error("[ERROR] 쉼표 뒤에 아무 것도 입력하지 않으셨습니다.");
    }
  }

  // 5자를 초과 했을 때 에러 발생
  static isexceedsFiveCharacters(carName) {
    if (carName.length > 5) {
      throw new Error("[ERROR] 5자를 초과해서 입력할 수 없습니다.");
    }
  }

  // 중복된 차 이름이 있다면 에러 발생
  static validateDuplicateCarName(carNames) {
     if(new Set(carNames).size !== Number(carNames.length)) {
        throw new Error('[ERROR] 차 이름이 중복되었습니다.');
     }
  }
}
export default Validation;
