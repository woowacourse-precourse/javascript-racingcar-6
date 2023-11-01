import App from "../src/App.js";
import { ERROR } from "../src/message.js";

const mockFn = jest.fn();

validateCarName = (arr) => {
  arr.forEach((carName) => {
    if (carName.length > 5) {
      mockFn(carName);
    }
  });
};

validateCarName(["abcdef"]);
validateCarName(["abc", "defghi"]);

describe("조건 검증 테스트", () => {
  const app = new App();

  test("자동차 이름이 5자를 초과할 경우 에러 발생", () => {
    expect(mockFn.mock.calls[0].length).toBeLessThanOrEqual(5);
    expect(mockFn.mock.calls[1].length).toBeLessThanOrEqual(5);
    expect(mockFn.mock.calls.length).toBe(2);
  });

  test("시도할 횟수가 숫자가 아닐 경우 에러 발생", () => {
    expect(() => app.validateNumber(NaN)).toThrow(ERROR.ATTEMPT_COUNT);
  });
});
