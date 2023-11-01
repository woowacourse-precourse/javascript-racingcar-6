import Validation from "../src/Validation";

describe("시도 횟수 테스트", () => {
  test("자연수가 아닌 문자를 입력한 경우", () => {
    const input = "yes";

    expect(() => Validation.tryCount(input)).toThrow(
      "[ERROR] 숫자의 형태로 입력해주세요."
    );
  });

  test("1 미만의 숫자를 입력한 경우", () => {
    const input = "0";

    expect(() => Validation.tryCount(input)).toThrow(
      "[ERROR] 1 이상의 숫자를 입력해주세요."
    );
  });
});
