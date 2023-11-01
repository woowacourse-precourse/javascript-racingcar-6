import CarNames from "../src/model/car/carNames";
import { ERROR } from "../src/utils/constants";

const carNames = new CarNames();

describe("createValidNameList 테스트", () => {
  test("정상적인 자동차 이름이 입력된 경우", () => {
    const input = "isy,yunji,y";
    expect(() => carNames.createValidNameList(input)).not.toThrow();
  });

  test("자동차 이름이 없을경우", () => {
    const input = "";
    expect(() => carNames.createValidNameList(input)).toThrow(
      ERROR.EMPTY_INPUT
    );
  });

  test("자동차 이름이 5글자를 초과하는 경우", () => {
    const input = "sdf,sdfsdf";
    expect(() => carNames.createValidNameList(input)).toThrow(
      ERROR.INVALID_NAME_LENGTH
    );
  });

  test("중복된 자동차 이름이 있는 경우", () => {
    const input = "sdf,sdf,sd";
    expect(() => carNames.createValidNameList(input)).toThrow(
      ERROR.INVALID_DUPLICATE_NAMES
    );
  });

  test("공백인 자동차 이름이 있는 경우", () => {
    const input = " ,sdf";
    expect(() => carNames.createValidNameList(input)).toThrow(
      ERROR.INVALID_BLANK_NAME
    );
  });
});
