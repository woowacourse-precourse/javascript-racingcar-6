class CarNameValidator {
  /**
   * 입력받은 자동차 이름들
   * @param {[string]} arrCarNames
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
   * 입력받은 자동차 이름들
   * @param {[string]} arrCarNames
   */
  static duplicationValidate(arrCarNames) {
    const setCarNames = new Set(arrCarNames);

    if (setCarNames.size !== arrCarNames.length)
      throw new Error('[ERROR] 중복된 자동차 이름을 입력했습니다.');
  }

  /**
   * 입력받은 자동차 이름들
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
   * 입력받은 자동차 이름들
   * @param {string} carNames
   * 검증되었다면 string array로 반환
   * @returns {[string]}
   */
  static carNameValidator(carNames) {
    const arrCarNames = carNames.split(',');

    this.lengthValidate(arrCarNames);
    this.duplicationValidate(arrCarNames);
    this.spaceValidate(arrCarNames);

    return arrCarNames;
  }
}

export default CarNameValidator;
