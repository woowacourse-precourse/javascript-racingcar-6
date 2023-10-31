class Validator {
  static racerEntry(carNames) {
    const INVAILD_RACER_ENTRY = carNames.split(',').length < 2;

    if (INVAILD_RACER_ENTRY) {
      throw new Error('[ERROR] 자동차 이름은 2개 이상이어야 합니다.');
    }
    return true;
  }

  static carNames(carNames) {
    const INVALID_CAR_NAMES = carNames
      .split(',')
      .find(carName => carName.trim().length > 5);

    if (INVALID_CAR_NAMES) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    }
    return true;
  }

  static tryCount(tryCount) {
    const INVALID_TRY_COUNT = !/^[1-9]\d*$/.test(tryCount);

    if (INVALID_TRY_COUNT) {
      throw new Error('[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.');
    }
    return true;
  }
}

export default Validator;
