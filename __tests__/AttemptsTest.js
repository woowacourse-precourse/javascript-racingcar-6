import User from "../src/User";

describe("시도 횟수 테스트", () => {
  test("숫자 외 타입에 대한 예외 처리", () => {
    const input = "string";
    const result = () => User.validateAttempts(input);
    expect(result).toThrow("[ERROR] 잘못된 타입입니다. 숫자를 입력해주세요.");
  });

  test("0 이하 숫자에 대한 예외 처리", () => {
    const input = "-1";
    const result = () => User.validateAttempts(input);
    expect(result).toThrow("[ERROR] 1 이상의 숫자를 입력해주세요.");
  });

  test("정수가 아닌 숫자에 대한 예외 처리", () => {
    const input = "3.14";
    const result = () => User.validateAttempts(input);
    expect(result).toThrow("[ERROR] 잘못된 숫자 형식입니다.");
  });
});
