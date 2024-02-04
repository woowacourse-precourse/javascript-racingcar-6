class Validator {
  isValidCarName(input) {
    if (!this.isValidNameLength(input))
      throw new Error("[ERROR] 올바르지 않은 차 이름 길이입니다.");
    if (!this.isNumber(input))
      throw new Error("[ERROR] 올바르지 않은 차 이름입니다.");
    return true;
  }

  isValidNameLength(input) {
    if (input.length <= 5) return true;
  }

  isNumber(input) {
    if (isNaN(input)) return true;
  }
}

export default Validator;
