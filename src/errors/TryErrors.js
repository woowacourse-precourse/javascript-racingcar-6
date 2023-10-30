class TryErrors {
  static checkInputNumber(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 숫자가 아닌 값이 입력되었습니다.");
    }

    const numberOfAttempts = parseInt(input, 10);
    return numberOfAttempts;
  }

  static checkNagativeNumber(input) {
    const number = parseInt(input, 10);

    if (number < 0) {
      throw new Error("[ERROR] 시도 횟수는 음수가 될 수 없습니다.");
    }

    return number;
  }
}

export default TryErrors;
