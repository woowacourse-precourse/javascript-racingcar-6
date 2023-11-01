import NumberOfAttempt from "../src/model/game/numberOfAttempt";

describe("시도 횟수 클래스 테스트", () => {
  test("숫자가 정수가 아닌 경우", () => {
    expect(() => {
      const numberOfAttempt1 = new NumberOfAttempt("1.5");
    }).toThrow("[ERROR] 정수를 입력해 주세요.");
  });

  test("자연수가 아닌 경우", () => {
    expect(() => {
      const numberOfAttempt2 = new NumberOfAttempt("0");
    }).toThrow("[ERROR] 0이상의 정수를 입력해 주세요.");

    expect(() => {
      const numberOfAttempt3 = new NumberOfAttempt("-1");
    }).toThrow("[ERROR] 0이상의 정수를 입력해 주세요.");
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
