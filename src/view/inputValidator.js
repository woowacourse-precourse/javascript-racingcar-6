export class InputValidator {
  validateCarNamesInput(input) {
    if (input == null || input.isBlank)
      throw new Error("자동차 이름은 공백 없이 입력해야합니다.");
    if (input.length > 5 || input.length < 1)
      throw new Error("자동차 이름은 1~5자리로 입력하세요.");
  }

  validateAttemptCountInput(input) {
    if (isNaN(Number(input))) throw new Error("숫자만 입력 가능합니다");
    if (input.length < 1) throw new Error("시도 횟수는 1 이상으로 입력하세요.");
  }
}
