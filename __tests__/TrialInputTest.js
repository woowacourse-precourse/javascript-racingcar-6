import { checkInputNumberType } from "../src/userInterface.js";

describe("시도 횟수에 대한 예외 처리", () => {
  test("문자가 입력된 경우", () => {
    const input = ["a"];
    expect(() => checkInputNumberType(input)).toThrow("[ERROR]");
  });

  test("정수가 아닌 수가 입력된 경우", () => {
    const input = ["3.3"];
    expect(() => checkInputNumberType(input)).toThrow("[ERROR]");
  });

  test("음수가 입력된 경우", () => {
    const input = ["-1"];
    expect(() => checkInputNumberType(input)).toThrow("[ERROR]");
  });

  test("공백이 입력된 경우", () => {
    const input = [" "];
    expect(() => checkInputNumberType(input)).toThrow("[ERROR]");
  });

  test("입력값이 없는 경우", () => {
    const input = [""];
    expect(() => checkInputNumberType(input)).toThrow("[ERROR]");
  });
});
