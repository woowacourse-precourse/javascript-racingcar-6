const ERROR_CODE = {
  WRONG_RANGE_NAME: '0 ~ 9사이의 이름을 입력하세요',
  SPECIAL_CHARATER: '이름에 특수문자를 입력하지 마세요.',
  NOT_INCLUDE_COMMA: '이름과 이름사이를 쉼표로 구분하세요',
  UNDER_ZERO: '0이상의 시도 횟수를 입력하세요.',
  NOT_NUMBER: '숫자를 입력하세요',
};

class InputException extends Error {
  /**
   * @param {'WRONG_RANGE_NAME' |'SPECIAL_CHARATER' |'NOT_INCLUDE_COMMA' | 'UNDER_ZERO' |'NOT_NUMBER'} code
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
