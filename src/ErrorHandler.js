class ErrorHandler {
  ERROR_MESSAGE = {
    invalidCarName:
      '[ERROR] 자동차 이름은 1자 이상 5자 이하로 입력해주세요. (쉼표(,)로 구분)',
    invalidRacingCount:
      '[ERROR] 숫자가 잘못된 형식입니다. 1 이상의 정수를 입력해주세요.',
  };

  throwInvalidCarNameError() {
    throw new Error(this.ERROR_MESSAGE.invalidCarName);
  }

  throwInvalidRacingCountError() {
    throw new Error(this.ERROR_MESSAGE.invalidRacingCount);
  }
}

export default ErrorHandler;
