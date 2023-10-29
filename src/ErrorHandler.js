class ErrorHandler {
  ERROR_MESSAGE = {
    invalidCarName:
      '[ERROR] 자동차 이름은 5자 이하로 입력해주세요. (쉼표(,)로 구분)',
    invalidRaceTimes:
      '[ERROR] 숫자가 잘못된 형식입니다. 1 이상의 정수를 입력해주세요.',
  };

  throwInvalidCarNameError() {
    throw new Error(ERROR_MESSAGE.invalidCarName);
  }

  throwInvalidraceTimesError() {
    throw new Error(ERROR_MESSAGE.invalidRaceTimes);
  }
}

export default ErrorHandler;
