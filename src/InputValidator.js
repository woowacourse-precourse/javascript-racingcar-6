class InputValidator {
  /**
   *
   * @param {string} input
   * @returns {[string]}
   */
  static async carNameValidator(input) {
    const inputToArr = input.split(',');
    inputToArr.forEach((carName) => {
      if (carName.length > 5)
        throw new Error(
          '[ERROR] 자동차의 이름은 쉼표로 구분하여 5글자 이하로 입력해주세요.'
        );
    });
    return inputToArr;
  }
  static async tryNumValidator(input) {
    if (isNaN(input)) throw new Error('[ERROR] 숫자를 입력해주세요.');
  }
}

export default InputValidator;
