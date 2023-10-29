class ErrorHandler {
  throwInvalidCarNameError() {
    throw new Error(
      '[ERROR] 자동차 이름은 5자 이하로 입력해주세요. (쉼표(,)로 구분)'
    );
  }

  throwInvalidraceTimesError() {
    throw new Error(
      '[ERROR] 숫자가 잘못된 형식입니다. 1 이상의 정수를 입력해주세요.'
    );
  }
}

export default ErrorHandler;
