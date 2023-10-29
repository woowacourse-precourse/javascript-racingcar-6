const EXCEEDED_NAME_LENGTH_ERROR_MSG = '[ERROR] 이름 길이 제한을 초과했습니다.';
const WRONG_FORMAT_NUMBER_ERROR_MSG = '[ERROR] 숫자가 잘못된 형식입니다.';

class ErrorCheck {
  static carListString(string) {
    string.split(',').forEach(name => {
      if (name.length > 5) throw new Error(EXCEEDED_NAME_LENGTH_ERROR_MSG);
    });
  }

  static isPositiveIntegerString(string) {
    const numberFromString = Number(string);
    if (isNaN(numberFromString)) throw new Error(WRONG_FORMAT_NUMBER_ERROR_MSG);
    if (numberFromString <= 0) throw new Error(WRONG_FORMAT_NUMBER_ERROR_MSG);
    if (!Number.isInteger(numberFromString))
      throw new Error(WRONG_FORMAT_NUMBER_ERROR_MSG);
  }
}

export default ErrorCheck;
