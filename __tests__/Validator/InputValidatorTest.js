import InputValidator from "../../src/Validator/InputValidator";

describe("InputValidator 테스트", () => {
  describe("자동차 이름에 대해 검증한다", () => {
    test("자동차가 1대도 없는 경우 예외를 발생시킨다", () => {
      // given
      const carNames = undefined;

      // when
      const result = () => InputValidator.validateCarArray(carNames);

      // then
      expect(result).toThrow("[ERROR]");
    });

    test("자동차 이름이 5자 이상인 경우 예외를 발생시킨다", () => {
      // given
      const carName = "pobiii";

      // when
      const result = () => InputValidator.validateCarNameLength(carName);

      // then
      expect(result).toThrow("[ERROR]");
    });

    test("자동차 이름에 대한 통합 검증 테스트", () => {
      // given
      const carNames = "pobi,woni,sean";
      const wrongCarNames = "pobiii,woni,sean";

      // when
      const result = InputValidator.validateCarNames(carNames);
      const wrongResult = () => InputValidator.validateCarNames(wrongCarNames);

      // then
      expect(result).toEqual(carNames);
      expect(wrongResult).toThrow("[ERROR]");
    });
  });

  describe("시도 횟수에 대해 검증한다", () => {
    test("시도 횟수가 숫자가 아닌 경우 예외를 발생시킨다", () => {
      // given
      const tryCount = "1a";

      // when
      const result = () => InputValidator.isNumber(tryCount);

      // then
      expect(result).toThrow("[ERROR]");
    });

    test("시도 횟수가 0 미만인 경우 예외를 발생시킨다", () => {
      // given
      const tryCount = -1;

      // when
      const result = () => InputValidator.isBiggerThanZero(tryCount);

      // then
      expect(result).toThrow("[ERROR]");
    });

    test("시도 횟수에 대한 통합 검증 테스트", () => {
      // given
      const tryCount = "1";
      const wrongTryCount = "1a";

      // when
      const result = InputValidator.validateTryCount(tryCount);
      const wrongResult = () => InputValidator.validateTryCount(wrongTryCount);

      // then
      expect(result).toEqual(tryCount);
      expect(wrongResult).toThrow("[ERROR]");
    });
  });
});
