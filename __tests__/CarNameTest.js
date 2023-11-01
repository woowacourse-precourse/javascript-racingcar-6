import App from "../src/App";

describe("자동차 이름 예외 처리", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test("글자수 검사", () => {
    const cars = ["pobi", "woni", "jun", "Verstappen"];

    expect(() => app.isInputVaild(cars)).toThrow(
      "[ERROR] 자동차 이름은 5자 이하만 가능합니다."
    );
  });

  test("중복 검사", () => {
    const cars = ["pobi", "woni", "jun", "jun"];

    expect(() => app.isInputVaild(cars)).toThrow(
      "[ERROR] 자동차 이름은 중복 불가능합니다."
    );
  });

  test("정상 실행", () => {
    expect(() => app.isInputVaild(["pobi", "woni", "jun"])).not.toThrow();
  });
});
