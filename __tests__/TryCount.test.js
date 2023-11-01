import TryCount from "../src/TryCount.js";

describe("시도 횟수 입력", () => {
  test("시도 횟수가 0 이하일 경우 예외 처리", async () => {
    const input = 0;

    expect(() => {
      TryCount.validateTryCount(input);
    }).toThrow();
  });

  test("시도 횟수가 숫자가 아닌 값일 경우 예외 처리", async () => {
    const input = ["ab", "3ab"];

    expect(() => {
      TryCount.validateTryCount(input);
    }).toThrow();
  });
});
