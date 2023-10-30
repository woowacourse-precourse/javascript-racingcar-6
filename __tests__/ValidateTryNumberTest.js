import { inputTryNumberHandler } from "../src/utils/inputHandler.js";

describe("시도 횟수 입력 함수 테스트", () => {
  test("올바른 숫자 입력", () => {
    const input = "5";
    expect(async () => inputTryNumberHandler(input)).not.toThrow();
  });

  test("음수 값 입력", () => {
    const input = "-3";
    expect(async () => inputTryNumberHandler(input)).rejects.toThrow("[ERROR]");
  });

  test("숫자가 아닌 값을 입력", () => {
    const input = "abc";
    expect(async () => inputTryNumberHandler(input)).rejects.toThrow("[ERROR]");
  });

  test("빈 문자열 입력", () => {
    const input = "";
    expect(async () => inputTryNumberHandler(input)).rejects.toThrow("[ERROR]");
  });
});
