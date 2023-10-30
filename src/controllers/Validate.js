class Validate {
  static ERROR_ISNAN_MESSAGE = "0에서 9사이의 1자리 숫자만 입력할 수 있습니다.";

  // inputChance(이동 횟수) 검증하는 함수
  checkInput = (inputChance) => {
    if (isNaN(inputChance)) {
      throw new Error(PlayerModel.ERROR_ISNAN_MESSAGE);
    } else if (inputChance.length !== 1) {
      throw new Error(PlayerModel.ERROR_ISNAN_MESSAGE);
    } else {
      return true;
    }
  };
}
export default Validate;
