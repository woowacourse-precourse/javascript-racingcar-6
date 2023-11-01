import { checkNames, checkNumber } from "../src/App.js";

describe("입력값 테스트", () => {
  test("split 메서드로 주어진 값을 구분", () => {
    const input = "Kona,Soul";
    const result = input.split(",");

    expect(result).toContain("Soul", "Kona");
    expect(result).toContainEqual("Kona", "Soul");
  });

  test("split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환", () => {
    const input = "Ray";
    const result = input.split(",");

    expect(result).toContain("Ray");
  });

  test("자동차 이름이 5자 이하인지 테스트", () => {
    const carNameList = ["Kona", "Soul", "Ray"];
    expect(() => checkNames(carNameList)).not.toThrow();

    const invalidCarNameList = ["Kona", "Soul", "Avante"];
    expect(() => checkNames(invalidCarNameList)).toThrow(Error);
  });

  test("라운드 횟수 입력값이 숫자인지 테스트", () => {
    const validNumber = 5;
    expect(() => checkNumber(validNumber)).not.toThrow();

    const invalidNumber = "a";
    expect(() => checkNumber(invalidNumber)).toThrow(Error);
  });
});
