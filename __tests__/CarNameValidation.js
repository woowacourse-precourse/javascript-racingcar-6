import { ERRORMSG } from "../src/constants/message.js";
import {
  checkInputCarNameValidation,
  checkinputCarList,
} from "../src/racingGame/utils/validation.js";

describe("자동차 이름 유효성 테스트", () => {
  test("자동차 2대 이하", () => {
    const input = ["test"];

    expect(() => {
      checkinputCarList(input);
    }).toThrow(ERRORMSG.invalid_min_carList);
  });

  test("중복된이름 포함", () => {
    const input = ["test", "test", "cha23"];

    expect(() => {
      checkInputCarNameValidation(input);
    }).toThrow(ERRORMSG.invalid_duplicate_name);
  });

  test("최대 자동차갯수 초과", () => {
    const input = ["test23", "test", "cha234", "as12", "123", "car2"];

    expect(() => {
      checkInputCarNameValidation(input);
    }).toThrow(ERRORMSG.invalid_carlist_length);
  });

  test("자동차 이름 5글자 초과", () => {
    const input = ["test23", "test", "cha234"];

    expect(() => {
      checkInputCarNameValidation(input);
    }).toThrow(ERRORMSG.invalid_carname_length);
  });

  test("자동차 이름에 공백 포함", () => {
    const input = ["te 23", "test", "cha234"];

    expect(() => {
      checkInputCarNameValidation(input);
    }).toThrow(ERRORMSG.invalid_contain_gap);
  });

  test("자동차 이름에 빈문자열 포함", () => {
    const input = ["", "test", "cha234"];

    expect(() => {
      checkInputCarNameValidation(input);
    }).toThrow(ERRORMSG.invalid_contain_not);
  });

  test("자동차 이름에 특수문자 포함", () => {
    const input = ["test@", "test", "cha234"];

    expect(() => {
      checkInputCarNameValidation(input);
    }).toThrow(ERRORMSG.invalid_special_character);
  });

  test("자동차 이름에 한글 포함", () => {
    const input = ["테스트", "test", "cha234"];

    expect(() => {
      checkInputCarNameValidation(input);
    }).toThrow(ERRORMSG.invalid_korean_character);
  });
});
