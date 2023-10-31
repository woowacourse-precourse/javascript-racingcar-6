import Is from './Is.js';

const EXCEEDED_NAME_LENGTH_ERROR_MSG = '[ERROR] 이름 길이 제한을 초과했습니다.';
const NOT_POSITIVE_INTEGER_ERROR_MSG =
  '[ERROR] 양의 정수가 들어오지 않았습니다';

const NAME_LENGTH_LIMIT = 5;

class ErrorCheck {
  static carListString(string) {
    string.split(',').forEach(name => {
      if (name.length > NAME_LENGTH_LIMIT)
        throw new Error(EXCEEDED_NAME_LENGTH_ERROR_MSG);
    });
  }

  static positiveIntegerString(string) {
    if (!Is.positiveIntergerString(string))
      throw new Error(NOT_POSITIVE_INTEGER_ERROR_MSG);
  }
}

export default ErrorCheck;
