import App from "../src/App.js";

describe("시도횟수 테스트", () => {
    test("숫자를 입력했는지 테스트", () => {
      const INPUT = "a";
      const app = new App();
      expect(() => app.isNaNNumberOfTryValidity(INPUT)).toThrow("[ERROR]");
    });
  });
  