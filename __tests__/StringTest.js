import App from "../src/App.js";

describe("문자열 테스트", () => {
  test("2대 이상 입력했는지 테스트", () => {
    const ARRAY = ["a"];
    const app = new App();
    expect(() => app.numberOfCarValidity(ARRAY)).toThrow("[ERROR]");
  });

  test("자동차 이름이 5글자 이하인지 테스트", () => {
    const CAR_NAME = "simorimi";
    const app = new App();
    expect(() => app.carNameLengthValidity(CAR_NAME)).toThrow("[ERROR]");
  });
});

