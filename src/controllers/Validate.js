class Validate {
  static ERROR_ISNAN_MESSAGE = "0에서 9사이의 1자리 숫자만 입력할 수 있습니다.";
  static ERROR_LENGTH_MESSAGE =
    "자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능합니다.";
  // inputChance(이동 횟수) 검증하는 함수
  checkInput = (inputChance) => {
    if (isNaN(inputChance)) {
      throw new Error(Validate.ERROR_ISNAN_MESSAGE);
    } else if (inputChance.length !== 1) {
      throw new Error(Validate.ERROR_ISNAN_MESSAGE);
    } else {
      return true;
    }
  };

  checkCarName = (carNames) => {
    for (const carName of carNames) {
      console.log(carName);
      if (carName.length > 5) {
        throw new Error(Validate.ERROR_LENGTH_MESSAGE);
      }
    }
  };
}
export default Validate;
