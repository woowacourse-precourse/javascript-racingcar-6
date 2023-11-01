export class ErrorMessage {
  static getInvalidLengthMessage() {
    return '[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.';
  }

  static getDuplicateNameMessage() {
    return '[ERROR] 자동차 이름은 중복이 없어야 합니다.';
  }

  static getAlphabetOnlyMessage() {
    return '[ERROR] 자동차 이름은 영문만 가능합니다.';
  }
}
