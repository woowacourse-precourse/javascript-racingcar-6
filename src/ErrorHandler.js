class ErrorHandler {
  throwInvalidCarNameError() {
    throw new Error(
      '[ERROR] 자동차 이름은 5자 이하로 입력해주세요. (쉼표(,)로 구분)'
    );
  }
}

export default ErrorHandler;
