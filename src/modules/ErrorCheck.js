const EXCEEDED_NAME_LENGTH_ERROR = '[ERROR] 이름 길이 제한을 초과했습니다.';
class ErrorCheck {
  static carListString(string) {
    string.split(',').forEach(name => {
      if (name.length > 5) throw new Error(EXCEEDED_NAME_LENGTH_ERROR);
    });
  }
}

export default ErrorCheck;
