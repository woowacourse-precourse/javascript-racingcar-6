import App from "../src/App.js";

describe("시도횟수 테스트", () => {
  test("숫자를 입력했는지 테스트", () => {
    const INPUT = "a";
    const app = new App();
    expect(() => app.isNaNNumberOfTryValidity(INPUT)).toThrow("[ERROR]");
  });

  test("0보다 큰 수를 입력했는지 테스트", () => {
    const INPUT = 0;
    const app = new App();
    expect(() => app.isNaturalNumberValidity(INPUT)).toThrow("[ERROR]");
  });
});
