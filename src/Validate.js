class Validate {
  static ERROR_ISNAN_MESSAGE =
    "[ERROR] 0에서 9사이의 1자리 숫자만 입력할 수 있습니다.";
  static ERROR_LENGTH_MESSAGE =
    "[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능합니다.";
  static ERROR_DUPLICATION_MESSAGE =
    "[ERROR] 자동차 이름은 중복될 수 없습니다.";
  static MAX_LENGTH_NAME = 5;
  static MAX_LENGTH_NUMBER = 1;

  // inputChance(이동 횟수) 검증하는 함수
  checkInput = (inputChance) => {
    if (isNaN(inputChance)) {
      throw new Error(Validate.ERROR_ISNAN_MESSAGE);
    } else if (inputChance.length !== MAX_LENGTH_NUMBER) {
      throw new Error(Validate.ERROR_ISNAN_MESSAGE);
    } else {
      return true;
    }
  };
  // 자동차 이름을 검증하는 함수
  checkCarName = (carNames) => {
    const setCarNames = new Set(carNames);
    if (carNames.length !== setCarNames.size) {
      throw new Error(Validate.ERROR_DUPLICATION_MESSAGE);
    }
    for (const carName of carNames) {
      if (carName.length > Validate.MAX_LENGTH_NAME) {
        throw new Error(Validate.ERROR_LENGTH_MESSAGE);
      }
    }
  };
}
export default Validate;
