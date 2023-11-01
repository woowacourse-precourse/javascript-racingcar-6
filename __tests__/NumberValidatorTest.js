import NumberOfAttempt from "../src/model/game/numberOfAttempt";

describe("시도 횟수 Validator 테스트", () => {
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
});
