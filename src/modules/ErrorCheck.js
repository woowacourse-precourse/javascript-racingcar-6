const EXCEEDED_NAME_LENGTH_ERROR_MSG = '[ERROR] 이름 길이 제한을 초과했습니다.';
const NOT_POSITIVE_INTEGER_ERROR_MSG =
  '[ERROR] 양의 정수가 들어오지 않았습니다';

class ErrorCheck {
  static carListString(string) {
    string.split(',').forEach(name => {
      if (name.length > 5) throw new Error(EXCEEDED_NAME_LENGTH_ERROR_MSG);
    });
  }

  static isPositiveIntegerString(string) {
    const numberFromString = Number(string);
    if (isNaN(numberFromString))
      throw new Error(NOT_POSITIVE_INTEGER_ERROR_MSG);
    if (numberFromString <= 0) throw new Error(NOT_POSITIVE_INTEGER_ERROR_MSG);
    if (!Number.isInteger(numberFromString))
      throw new Error(NOT_POSITIVE_INTEGER_ERROR_MSG);
  }
}

export default ErrorCheck;
