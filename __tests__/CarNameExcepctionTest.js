import App from "../src/App.js";

describe("자동차 이름 예외 테스트", () => {
  test("글자수가 6 이상인 경우 에러 메시지 반환", () => {
    const app = new App();
    const CARS_ARRAY = ["hellosudol", "hi"];

    expect(() => app.inputCarName(CARS_ARRAY)).toThrowError(
      "[ERROR] 6글자 이하로 입력해야 합니다."
    );
  });

  test("글자수가 0인 경우 에러 메시지 반환", () => {
    const app = new App();
    const CARS_ARRAY = ["hello", "hi", ""];

    expect(() => app.inputCarName(CARS_ARRAY)).toThrowError(
      "[ERROR] 1글자 이상 입력해야 합니다."
    );
  });
});
