import RaceTrialValidator from "../src/validate/RaceTrialValidator.js";

describe("RaceTrialValidator 테스트", () => {
  test("정상적인 시도 횟수", () => {
    const input = "5";
    expect(() => RaceTrialValidator.validateTrial(input)).not.toThrow();
  });

  test("시도 횟수가 빈 문자열일 경우", () => {
    const input = "";
    expect(() => RaceTrialValidator.validateTrial(input)).toThrow("[ERROR] 입력한 값이 존재하지 않습니다.");
  });

  test("시도 횟수에 공백이 포함된 경우", () => {
    const input = " 5 ";
    expect(() => RaceTrialValidator.validateTrial(input)).toThrow("[ERROR] 입력한 값에 공백이 존재합니다.");
  });

  test("시도 횟수가 숫자가 아닌 경우", () => {
    const input = "--";
    expect(() => RaceTrialValidator.validateTrial(input)).toThrow("[ERROR] 자동차 이동 횟수는 숫자만 가능합니다.");
  });

  test("시도 횟수가 0 이하의 숫자인 경우", () => {
    const input = "0";
    expect(() => RaceTrialValidator.validateTrial(input)).toThrow("[ERROR] 자동차 이동 횟수는 1이상의 자연수만 가능합니다.");
  });
});