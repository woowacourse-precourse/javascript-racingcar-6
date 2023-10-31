import App from "../src/App.js";

describe("문자열 테스트", () => {
  test("2대 이상 입력했는지 테스트", () => {
    const ARRAY = ["a"];
    const APP = new App();
    expect(() => APP.numberOfCarValidity(ARRAY)).toThrow("[ERROR]");
  });

  test("자동차 이름이 5글자 이하인지 테스트", () => {
    const CAR_NAME = "simorimi";
    const APP = new App();
    expect(() => APP.carNameLengthValidity(CAR_NAME)).toThrow("[ERROR]");
  });

  test("중복된 자동차 이름이 있는지 테스트", () => {
    const ARRAY = ["sim", "sim"];
    const APP = new App();
    expect(() => APP.carNameDuplicateValidity(ARRAY)).toThrow("[ERROR]");
  });
});

