import NumberOfAttempt from "../src/model/game/numberOfAttempt";
import { ERROR } from "../src/utils/constants";

describe("시도 횟수 클래스 테스트", () => {
  test("정수가 아닌 경우", () => {
    expect(() => {
      const numberOfAttempt = new NumberOfAttempt("1.5");
    }).toThrow(ERROR.INVALID_NUMBER);
  });

  test("자연수가 아닌 경우", () => {
    expect(() => {
      const numberOfAttempt = new NumberOfAttempt("0");
    }).toThrow(ERROR.INVALID_NEGATIVE_INTEGER);

    expect(() => {
      const numberOfAttempt = new NumberOfAttempt("-1");
    }).toThrow(ERROR.INVALID_NEGATIVE_INTEGER);
  });

  test("isFinished() 테스트 - 시도 횟수가 0이 된 경우", () => {
    const numberOfAttempt = new NumberOfAttempt("1");
    numberOfAttempt.decrease();
    expect(numberOfAttempt.isFinished()).toBe(true);
  });

  test("isFinished() 테스트 - 시도 횟수가 0이 아닌 경우", () => {
    const numberOfAttempt = new NumberOfAttempt(2);
    numberOfAttempt.decrease();

    expect(numberOfAttempt.isFinished()).toBe(false);
  });

  test("decrease() 테스트", () => {
    const numberOfAttempt = new NumberOfAttempt(3);

    numberOfAttempt.decrease();
    expect(numberOfAttempt.NumberOfAttempt).toBe(2);
  });
});
