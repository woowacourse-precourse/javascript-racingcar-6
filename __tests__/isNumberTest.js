import App from "../src/App.js";

describe("사용자 입력 게임 횟수", () => {
  test("숫자가 아닌 값일 때 테스트", () => {
    const app = new App();
    const invalidInput = "abc";

    expect(() => app.checkNumber(invalidInput)).toThrowError(
      "[ERROR]: invalid number"
    );
  });

  test("숫자일 때 테스트", () => {
    const app = new App();
    const validInput = "123";

    expect(() => app.checkNumber(validInput)).not.toThrow();
  });
});
