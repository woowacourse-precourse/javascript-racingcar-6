class InputValidator {
  /**
   *
   * @param {[string]} arrInput
   */
  static lengthValidate(arrCarNames) {
    arrCarNames.forEach((carName) => {
      if (carName.length == 0)
        throw new Error('[ERROR] 이름이 없는 자동차가 있습니다.');
      if (carName.length > 5)
        throw new Error(
          '[ERROR] 자동차의 이름은 쉼표로 구분하여 5글자 이하로 입력해주세요.'
        );
    });
  }

  /**
   *
   * @param {[string]} arrCarNames
   */
  static duplicationValidate(arrCarNames) {
    const setCarNames = new Set(arrCarNames);

    if (setCarNames.size !== arrCarNames.length)
      throw new Error('[ERROR] 중복된 자동차 이름을 입력했습니다.');
  }

  /**
   *
   * @param {[string]} arrCarNames
   */
  static spaceValidate(arrCarNames) {
    arrCarNames.forEach((carName) => {
      if (carName.startsWith(' ') || carName.endsWith(' '))
        throw new Error(
          '[ERROR] 자동차 이름 시작과 끝의 공백은 오해를 일으킬 수 있습니다.'
        );
    });
  }

  /**
   *
   * @param {string} carNames
   * @returns {[string]}
   */
  static carNameValidator(carNames) {
    const arrCarNames = carNames.split(',');

    this.lengthValidate(arrCarNames);
    this.duplicationValidate(arrCarNames);
    this.spaceValidate(arrCarNames);

    return arrCarNames;
  }

  /**
   *
   * @param {string} tryNum
   * @returns {number}
   */
  static tryNumValidator(tryNum) {
    //* 입력하지 않은 경우
    if (tryNum.trim().length === 0)
      throw new Error('[ERROR] 아무 입력도 하지 않았습니다.');

    const NumtryNum = Number(tryNum);
    //* 숫자가 아닌 경우
    if (!Number.isInteger(NumtryNum))
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    //* 양수가 아닌 경우
    if (NumtryNum <= 0) throw new Error('[ERROR] 양수를 입력해주세요.');
    //if (/^[^0]\d*/) throw new Error('[ERROR] 숫자를 입력해주세요.');
    //if (NumtryNum.includes('-')) throw new Error('[ERROR] 양수를 입력해주세요.');
    return NumtryNum;
  }
}

export default InputValidator;
