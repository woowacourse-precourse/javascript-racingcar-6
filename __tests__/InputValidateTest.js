import App from "../src/App.js";

describe("입력값 검증", () => {
  test("자동차 이름 5글자 이상에 대한 예외처리", () => {
    // given
    const app = new App();
    const carNames = ["pobi", "woni", "chihoahn"];

    expect(() => app.validateCarName(carNames)).toThrow(
      "[ERROR] 자동차 이름은 5자 이하여하여 합니다."
    );
  });
  test("라운드가 음수일 경우 예외처리", () => {
    // given
    const app = new App();
    const gameRound = -1;

    expect(() => app.validateGameRound(gameRound)).toThrow(
      "[ERROR] 0이상의 숫자만 입력 가능합니다"
    );
  });
  test("라운드가 숫자가 아닌 경우 예외처리", () => {
    // given
    const app = new App();
    const gameRound = "a";

    expect(() => app.validateGameRound(gameRound)).toThrow(
      "[ERROR] 0이상의 숫자만 입력 가능합니다"
    );
  });
});
