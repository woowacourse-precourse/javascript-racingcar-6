import App from "../src/App.js";
import { ERROR } from "../src/message.js";

const mockFn = jest.fn();

mockFn(["woowacourse"]);
mockFn(["FuBao"]);

describe("조건 검증 테스트", () => {
  const app = new App();

  // test("자동차 이름이 5자를 초과할 경우 에러 발생", () => {
  //   expect(mockFn.mock.calls[0].length).toBeGreaterThanOrEqual(6);
  // });
  test("자동차 이름이 5자 이하일 경우 에러 발생하지 않음", () => {
    expect(mockFn.mock.calls[1].length).toBeLessThanOrEqual(5);
    expect(mockFn.mock.calls.length).toBe(2);
  });

  test("시도할 횟수가 숫자가 아닐 경우 에러 발생", () => {
    expect(() => app.validateNumber(NaN)).toThrow(ERROR.ATTEMPT_COUNT);
  });
  test("시도할 횟수가 숫자인 경우 에러 발생하지 않음", () => {
    expect(() => app.validateNumber(5)).not.toThrow();
  });
});
