import {
  checkCarNameOver,
  checkCarNameSame,
  checkCarNameWrong,
} from "../src/error/Validation.js";

describe("자동차 이름 유효 테스트", () => {
  test("자동차 이름 길이 초과", () => {
    const input = "abc,abccd,abcdef";
    expect(() => checkCarNameOver(input)).toThrow(
      "[ERROR] 자동차 이름 길이 초과"
    );
  });

  test("자동차 이름에 숫자 포함", () => {
    const input = "a12,abc";
    expect(() => checkCarNameWrong(input)).toThrow(
      "[ERROR] 자동차 이름 잘못된 입력"
    );
  });
  test("자동차 이름에 공백 포함", () => {
    const input = "abc d,a bc";
    expect(() => checkCarNameWrong(input)).toThrow(
      "[ERROR] 자동차 이름 잘못된 입력"
    );
  });
  test("자동차 이름에 특수문자 포함", () => {
    const input = "a12=,abc+";
    expect(() => checkCarNameWrong(input)).toThrow(
      "[ERROR] 자동차 이름 잘못된 입력"
    );
  });
  test("자동차 이름 중복 입력", () => {
    const input = "abc,abc,abcd";
    expect(() => checkCarNameSame(input)).toThrow(
      "[ERROR] 자동차 이름 중복 입력"
    );
  });
});
