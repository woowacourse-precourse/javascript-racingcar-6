import App from "../src/App.js";

describe("입력값 유효성 검사 테스트", () => {
  test("이름이 5자 넘어가는 경우", () => {
    const input = ["yongwon", "june", "pobi"];

    expect(() => {
      App.carInputValidator(input);
    }).toThrow("[ERROR] 자동차 이름은 5자 이하여야합니다.");
  });
});
