const Validation = {
  validateCarNames(carNames) {
    if (!carNames.every((carName) => carName.length <= 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    }

    if (new Set(carNames).size !== carNames.length) {
      throw new Error('[ERROR] 중복되는 자동차 이름이 존재합니다.');
    }
  },
};

export default Validation;
