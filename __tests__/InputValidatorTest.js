import App from "../src/App.js";

describe("입력값 유효성 검사 테스트", () => {
  test("이름이 5자 넘어가는 경우", () => {
    const input = ["yongwon", "june", "pobi"];

    expect(() => {
      App.carInputValidator(input);
    }).toThrow("[ERROR] 자동차 이름은 5자 이하여야합니다.");
  });

  test("시도 횟수가 숫자가 아닌 경우", () => {
    const input = "a";

    expect(() => {
      App.attemptInputValidator(input);
    }).toThrow("[ERROR] 숫자 형식이 아닙니다.");
  });
});
