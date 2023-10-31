class NumberOfAttempt {
  constructor(inputNumber) {
    this.NumberOfAttempt = inputNumber;
    this.validateNumber();
  }

  validateNumber() {
    if (!Number.isInteger(Number(this.NumberOfAttempt))) {
      throw new Error("[ERROR] 정수를 입력해 주세요.");
    }
    if (this.NumberOfAttempt <= 0) {
      throw new Error("[ERROR] 0이상의 정수를 입력해 주세요. ");
    }
  }

  isFinished() {
    if (this.NumberOfAttempt === 0) {
      return true;
    }
    return false;
  }
}
export default NumberOfAttempt;
