class InputValidation {
  isCarNameValid(input) {
    const carNameSet = new Set(input);
    const carNameCount = input.length;

    if (input.some((name) => name.length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    }
    if (input.some((name) => name.length < 1)) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상이여야 합니다.');
    }
    if (carNameCount < 2) {
      throw new Error('[ERROR] 자동차는 2대 이상이여야 합니다.');
    }
    if (carNameSet.size !== carNameCount) {
      throw new Error('[ERROR] 자동차 이름은 중복되지 않아야 합니다.');
    }
  }

  isRoundCountValid(input) {
    if (isNaN(input)) {
      throw new Error('[ERROR] 시도횟수는 숫자만 입력하세요.');
    }
    if (input < 0) {
      throw new Error('[ERROR] 0 이상의 숫자를 입력하세요.');
    }
    if (input % 1 !== 0) {
      throw new Error('[ERROR] 정수를 입력하세요.');
    }
  }
}
export default InputValidation;
