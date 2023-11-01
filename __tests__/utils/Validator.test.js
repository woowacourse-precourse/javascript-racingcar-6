import {
  NoInputError,
  LongNameError,
  DuplicatedNameError,
  OneNameError,
  NotNumberError,
  InvalidMinNumberError,
  NotIntegerError,
} from "../../src/utils/Error.js";
import Validator from "../../src/utils/Validator.js";

describe("Validator 클래스 테스트", () => {
  test("validateCarName 메서드를 가지고 있어야 한다.", () => {
    expect(typeof Validator.validateCarName).toBe("function");
  });

  test("빈 문자열이 입력된다면 NoInputError를 throw 해야 한다.", () => {
    const noInputName = [];
    expect(() => Validator.validateCarName(noInputName)).toThrow(NoInputError);
  });

  test("5자를 초과하는 이름을 포함한다면 LongNameError를 throw 해야 한다.", () => {
    const LongName = ["junwoo", "pobi", "woni", "jun"];
    expect(() => Validator.validateCarName(LongName)).toThrow(LongNameError);
  });

  test("중복된 이름이 존재하면 DuplicatedNameError를 throw 해야 한다.", () => {
    const duplicatedName = ["pobi", "woni", "jun", "pobi"];
    expect(() => Validator.validateCarName(duplicatedName)).toThrow(DuplicatedNameError);
  });

  test("자동차 이름이 하나 뿐이라면 OneNameError를 throw 해야 한다.", () => {
    const oneName = ["pobi"];
    expect(() => Validator.validateCarName(oneName)).toThrow(OneNameError);
  });

  test("validateRaceCount 메서드를 가지고 있어야 한다.", () => {
    expect(typeof Validator.validateRaceCount).toBe("function");
  });

  test("시도 횟수가 입력되지 않는다면 NoInputError를 throw 해야 한다.", () => {
    const noInputRaceCount = "";
    expect(() => Validator.validateRaceCount(noInputRaceCount)).toThrow(NoInputError);
  });

  test("시도 횟수에 숫자가 입력되지 않는다면 NotNumberError를 throw 해야 한다.", () => {
    const notNumberRaceCount = NaN;
    expect(() => Validator.validateRaceCount(notNumberRaceCount)).toThrow(NotNumberError);
  });

  test("시도 횟수가 0이라면 InvalidMinNumberError를 호출해야 한다.", () => {
    const zeroRaceCount = 0;
    expect(() => Validator.validateRaceCount(zeroRaceCount)).toThrow(InvalidMinNumberError);
  });

  test("시도 횟수가 1보다 작다면 InvalidMinNumberError를 호출해야 한다.", () => {
    const invalidMinNumberRaceCount = -1;
    expect(() => Validator.validateRaceCount(invalidMinNumberRaceCount)).toThrow(InvalidMinNumberError);
  });

  test("시도 횟수에 정수가 입력되지 않는다면 NotIntegerError를 throw 해야 한다.", () => {
    const notInteger = 4.5;
    expect(() => Validator.validateRaceCount(notInteger)).toThrow(NotIntegerError);
  });
});
