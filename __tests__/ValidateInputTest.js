import checkCarName from "../src/checkCarName";
import checkCount from "../src/checkCount";

describe("자동차 입력 예외처리 테스트", () => {
  test("입력하지 않은 경우 오류 발생", () => {
    const input = [""];
    const result = "[ERROR] 입력하지 않은 이름이 있습니다.";
    expect(() => checkCarName(input)).toThrow(result);
  });

  test("빈 입력값이 있는 경우 오류 발생", () => {
    const input = ["a", "b", ""]; //a,b,,
    const result = "[ERROR] 입력하지 않은 이름이 있습니다.";
    expect(() => checkCarName(input)).toThrow(result);
  });

  test("중복된 이름이 존재하는 경우 오류 발생", () => {
    const input = ["a", "b", "a"];
    const result = "[ERROR] 중복된 이름이 존재합니다.";
    expect(() => checkCarName(input).toThrow(result));
  });

  test("5글자 초과한 이름이 존재하는 경우 오류 발생", () => {
    const input = ["abcdefg", "a"];
    const result = "[ERROR] 자동차 이름이 5글자 초과되었습니다.";
    expect(() => checkCarName(input).toThrow(result));
  });
});

describe("레이싱 횟수 입력 예외처리 테스트 오류 발생", () => {
  test("숫자가 아닌 잘못된 타입의 입력값인 경우", () => {
    const input = "abc";
    const result = "[ERROR] 숫자가 잘못된 형식입니다.";
    expect(() => checkCount(input).toThrow(result));
  });

  test("0포함 음수거나 소수를 입력한 경우 오류 발생", () => {
    const zero = 0;
    const negative = -1;
    const decimal = 1.5;
    const result = "[ERROR] 숫자가 잘못된 형식입니다.";

    expect(() => checkCount(zero)).toThrow(result);
    expect(() => checkCount(negative)).toThrow(result);
    expect(() => checkCount(decimal)).toThrow(result);
  });
});
