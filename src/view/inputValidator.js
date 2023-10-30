export class InputValidator {
  validateCarsInput(input) {
    if (input.isBlank)
      throw new Error("자동차 이름은 공백 없이 입력해야합니다.");
  }

  validateNumbersInput(input) {
    if (isNaN(Number(input))) throw new Error("숫자만 입력 가능합니다");
  }
}
