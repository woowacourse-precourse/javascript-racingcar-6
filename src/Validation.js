class Validation {
  constructor() {}

  static #carNamesInputFormat(input) {
    if (input.length === 0) {
      throw new Error('[ERROR] 자동차 이름을 입력해 주세요.');
    }

    if (!/^[A-Za-z,]+$/.test(input)) {
      throw new Error(
        '[ERROR] 자동차 이름은 영어만 가능합니다.이름은 (,)를 이용해서 구분해 주세요.'
      );
    }
  }

  static #carNameFormat(input) {
    const checkCarNames = input.split(',');

    for (const carName of checkCarNames) {
      if (carName.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      }
    }

    if (new Set([...checkCarNames]).size !== checkCarNames.length) {
      throw new Error('[ERROR] 중복된 자동차 이름이 입력되었습니다.');
    }
  }

  static carNamesInput(input) {
    this.#carNamesInputFormat(input);
    this.#carNameFormat(input);
  }

  static roundCountInput(input) {
    const checkInput = Number(input);

    if (Number.isNaN(checkInput)) {
      throw new Error('[ERROR] 숫자를 입력해야 합니다.');
    }

    if (checkInput <= 0) {
      throw new Error('[ERROR] 0보다 큰 수를 입력해야 합니다.');
    }
  }
}

export default Validation;
