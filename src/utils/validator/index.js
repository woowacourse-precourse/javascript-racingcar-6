const Validator = {
  checkRacingCarNames(carNames) {
    if (isDelimiter(carNames)) {
      throw new Error('[ERROR] 구분자는 쉼표만 가능합니다.');
    }
  },
};

export default Validator;
