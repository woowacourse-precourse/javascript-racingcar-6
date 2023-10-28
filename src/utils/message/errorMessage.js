const ErrorMessage = {
  basicErrorMessage: (msg) => `[ERROR] ${msg}`,
  incorrectFormatErrorMessage: () => `잘못된 형식입니다.`,
  incorrectParameterErrorMessage: () => `잘못된 매개변수입니다.`,
  numberOutOfRangeErrorMessage: (num) => `${num}이하의 숫자를 입력해 주세요.`,
};

export { ErrorMessage };
