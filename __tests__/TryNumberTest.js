import { checkTryNumber } from "../src/error/Validation.js";

describe("사용자 입력 이동횟수 유효성 검사", () => {
  test("이동횟수 정상 입력", () => {
    const input = "5";
    expect(checkTryNumber(input)).toBeUndefined();
  });

  test("이동횟수 문자포함 입력", () => {
    const input = "5a";
    expect(() => checkTryNumber(input)).toThrow(
      "[ERROR] 이동횟수가 1~9까지 자연수가 아닙니다"
    );
  });
  test("이동횟수 음수 입력", () => {
    const input = "-3";
    expect(() => checkTryNumber(input)).toThrow(
      "[ERROR] 이동횟수가 1~9까지 자연수가 아닙니다"
    );
  });
  test("이동횟수 소수 입력", () => {
    const input = "1.5";
    expect(() => checkTryNumber(input)).toThrow(
      "[ERROR] 이동횟수가 1~9까지 자연수가 아닙니다"
    );
  });
});
