class Validator {
  static racerEntry(carNames) {
    if (carNames.split(',').length < 2) {
      throw new Error('[ERROR] 자동차 이름은 2개 이상이어야 합니다.');
    }
    return true;
  }

  static carNames(carNames) {
    if (carNames.split(',').some(carName => carName.trim().length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    }
    return true;
  }

  static tryCount(tryCount) {
    if (!/^[1-9]\d*$/.test(tryCount)) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
    }
    return true;
  }
}

export default Validator;
