const ERROR_CODE = {
  EMPTY_NAME: '이름에 공백을 입력하지 마세요',
  WRONG_RANGE_NAME: '0 ~ 9사이의 이름을 입력하세요',
  NOT_INCLUDE_COMMA: '이름과 이름사이를 쉼표로 구분하세요',
};

class InputException extends Error {
  /**
   * @param {*} message
   * @param {*} code
   */
  constructor(code) {
    super();

    Error.captureStackTrace(this, InputException);

    this.name = 'InputException';
    const errorMessage = ERROR_CODE[`${code}`];
    this.message = `[ERROR] : ${errorMessage}`;
  }
}

export default InputException;
