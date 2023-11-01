import { validateCarNames } from "../src/Validate";

describe("유효성 검사 테스트", () => {
  test("자동차 이름이 2개 미만일 경우 테스트", () => {
    const carNames = "dong";
    expect(() => validateCarNames(carNames)).toThrow();
  });

  test("자동차 이름이 5자 이상일 경우 테스트", () => {
    const carNames = "dong,wannnn";
    expect(() => validateCarNames(carNames)).toThrow();
  });
});
