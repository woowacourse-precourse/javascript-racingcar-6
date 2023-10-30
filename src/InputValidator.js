class InputValidator {
  /**
   *
   * @param {string} input
   * @returns {[string]}
   */
  static carNameValidator(input) {
    const inputToArr = input.split(',');

    inputToArr.forEach((carName) => {
      if (carName.length > 5)
        throw new Error(
          '[ERROR] 자동차의 이름은 쉼표로 구분하여 5글자 이하로 입력해주세요.'
        );
    });

    return inputToArr;
  }

  /**
   *
   * @param {string} input
   * @returns {number}
   */
  static tryNumValidator(input) {
    //* 앞자리가 0으로 시작하는 경우
    if (input[0] == 0) throw new Error('[ERROR] 숫자를 입력해주세요.');

    input = Number(input);
    //* 숫자가 아닌 경우
    if (!Number.isInteger(input))
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    //* 양수가 아닌 경우
    if (input <= 0) throw new Error('[ERROR] 양수를 입력해주세요.');
    //if (/^[^0]\d*/) throw new Error('[ERROR] 숫자를 입력해주세요.');
    //if (input.includes('-')) throw new Error('[ERROR] 양수를 입력해주세요.');
    return Number(input);
  }
}

export default InputValidator;
