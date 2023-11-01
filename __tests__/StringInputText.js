import { isCarNameValid, isIntValid } from "../src/App.js";

describe("자동차 이름 입력 값 예외 처리 테스트", () => {
  test("자동차 이름의 입력 값이 비어있을 시, 예외 발생", () => {
    const carName = []

    expect(() => isCarNameValid(carName)).toThrowError();
  });

  test("자동차 이름의 입력 값이 5글자 이상이면, 예외 발생", () => {
    const carName = ["pobi", "woniiini"]

    expect(() => isCarNameValid(carName)).toThrowError();
  });
});

describe("레이싱 횟수 입력 값 예외 처리 테스트", () => {
  test("입력 값이 정수가 아니면, 예외 발생", () => {
    const num = 0.1;

    expect(() => isIntValid(num)).toThrowError();
  });

  test("입력 값이 음수이면, 예외 발생", () => {
    const num = -5;

    expect(() => isIntValid(num)).toThrowError();
  });

  test("입력 값이 문자열 형태이면, 예외 발생", () => {
    const num = "qwer";

    expect(() => isIntValid(num)).toThrowError();
  });
});