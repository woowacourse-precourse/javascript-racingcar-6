class CarNameValidator {
  static validateCarName(carNames) {
    if (carNames.length === 0) {
      throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
    }

    const uniqueCarNames = new Set();

    carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해주세요.');
      }
      if (!carName.length) {
        throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
      }
      if (uniqueCarNames.has(carName)) {
        throw new Error('[ERROR] 중복된 자동차 이름이 있습니다.');
      }
      uniqueCarNames.add(carName);
    });
  }
}

export default CarNameValidator;
