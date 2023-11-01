import Is from './Is.js';

const EXCEEDED_NAME_LENGTH_ERROR_MSG = '[ERROR] 이름 길이 제한을 초과했습니다.';
const NOT_POSITIVE_INTEGER_ERROR_MSG =
  '[ERROR] 양의 정수가 들어오지 않았습니다';

const NAME_LENGTH_LIMIT = 5;

class ErrorCheck {
  /**
   * @param {String} string comma separated string
   * @throws Will throw an error if even one separated string has more than 5 characters based on UTF-16
   */
  static carListString(string) {
    string.split(',').forEach(name => {
      if (name.length > NAME_LENGTH_LIMIT)
        throw new Error(EXCEEDED_NAME_LENGTH_ERROR_MSG);
    });
  }

  /**
   * @param {String} string string to convert to a positive integer
   * @throws Will throw an error if the string is not a positive integer
   */
  static positiveIntegerString(string) {
    if (!Is.positiveIntergerString(string))
      throw new Error(NOT_POSITIVE_INTEGER_ERROR_MSG);
  }
}

export default ErrorCheck;
