import CarListValidate from "../src/validate/CarListCheck.js";
import TryNumberValidate from "../src/validate/TryNumberCheck.js";
import { ERROR } from "../src/util/constants.js";
// import { ERROR } from "../src/BaseballGame/constants/index.js";

describe("자동차 이름 입력 테스트", () => {
  const carValidate = new CarListValidate();

  test("split 메서드로 주어진 값을 구분", () => {
    const input = "1,2,abc";
    const result = ["1", "2", "abc"];

    expect(() => carValidate.validate(input).toContainEqual(result));
  });

  test("이름을 하나도 입력하지 않은 경우", () => {
    const input = [""];
    const result = ERROR.noInputCarList;

    expect(() => carValidate.checkNoInput(input).toThrow(result));
  });

  test("중복되는 이름을 입력한 경우", () => {
    const input = ["1", "1", "2"];
    const result = ERROR.carCount;

    expect(() => carValidate.checkSameName(input).toThrow(result));
  });

  test("5글자를 초과하는 이름을 입력한 경우", () => {
    const notErrorInput = ["12345", "1"];
    const errorInput = ["123456", "1"];
    const result = ERROR.carNameLength;

    expect(() => carValidate.checkNameLength(notErrorInput).not.toThrow());
    expect(() => carValidate.checkNameLength(errorInput).toThrow(result));
  });
});

describe("레이싱 횟수 입력 테스트", () => {
  const racingNumberValidate = new TryNumberValidate();

  test("0을 입력하거나 값을 입력하지 않은 경우 에러처리", () => {
    const input = [-2, 0, ""];
    const result = ERROR.tryNumberZero;

    input.forEach((input) => {
      expect(() => racingNumberValidate.checkZero(input).toThrow(result));
    });
  });

  test("숫자가 아닌 형식을 입력한 경우", () => {
    const input = ["a", "!", " ", "가"];
    const result = ERROR.tryNumberZero;

    input.forEach((input) => {
      expect(() => racingNumberValidate.checkType(input).toThrow(result));
    });
  });
});
