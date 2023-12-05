const InputValidator = {
  validateCarNames(carNames) {
    const carNameArray = carNames.split(",");
    this.validateCarArray(carNameArray);
    this.validateArray(carNameArray, this.validateCarNameLength);
    return carNames;
  },
  // 자동차는 1대라도 있어야 한다.
  validateCarArray(array) {
    if (!array || array.length === 0) {
      throw new Error("[ERROR] 유효한 자동차 이름이 아닙니다.");
    }
  },
  // 자동차 이름은 5자 이하여야한다.
  validateCarNameLength(carName) {
    if (carName.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }
  },
  // 배열과 주어진 콜백함수를 받아서 배열의 각 원소에 대해 콜백함수를 실행한다.
  validateArray(array, callback) {
    array.forEach((element) => {
      callback(element);
    });
  },
};

export default InputValidator;
