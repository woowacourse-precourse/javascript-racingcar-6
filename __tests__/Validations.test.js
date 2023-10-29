import { parseValidNumber } from "../src/Validations";

describe("getValidAttemptCount 함수 테스트", () => {
  test("정상 입력값 : 123", () => {
    const input = "123";
    const result = parseValidNumber(input);
    const expectedResult = 123;

    // 예상되는 결과와 실제 결과를 비교
    expect(result).toBe(expectedResult);
  });
  test("정상 입력값 : 001", () => {
    const input = "001";
    const result = parseValidNumber(input);
    const expectedResult = 1;

    // 예상되는 결과와 실제 결과를 비교
    expect(result).toBe(expectedResult);
  });

  test("비정상 입력값 : -123", () => {
    const input = "-123";
    const result = parseValidNumber(input);
    const expectedResult = null;

    // 예상되는 결과와 실제 결과를 비교
    expect(result).toBe(expectedResult);
  });
  test("비정상 입력값 : 최댓값 + 1", () => {
    const input = Number.MAX_SAFE_INTEGER + 1 + "";
    const result = parseValidNumber(input);
    const expectedResult = null;

    // 예상되는 결과와 실제 결과를 비교
    expect(result).toBe(expectedResult);
  });
  test("비정상 입력값 : 0", () => {
    const input = "0";
    const result = parseValidNumber(input);
    const expectedResult = null;

    // 예상되는 결과와 실제 결과를 비교
    expect(result).toBe(expectedResult);
  });
  test("비정상 입력값 : abc123", () => {
    const input = "abc123";
    const result = parseValidNumber(input);
    const expectedResult = null;

    // 예상되는 결과와 실제 결과를 비교
    expect(result).toBe(expectedResult);
  });
});
