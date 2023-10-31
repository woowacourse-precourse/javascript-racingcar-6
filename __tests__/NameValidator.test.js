import message from "../src/variables/message";
import {
  validateInputRacecar,
  validateRepeatedName,
} from "../src/validation/nameValidation.js";

describe("경주할 자동차 이름 검사", () => {
  it("빈 자동차 이름에 대한 오류를 던져야 합니다", () => {
    expect(() => validateInputRacecar(" ")).toThrowError(
      message.INPUT_SPACE_ERROR
    );
  });

  it("5자 이상의 자동차 이름에 대한 오류를 던져야 합니다", () => {
    expect(() => validateInputRacecar("abcdefg")).toThrowError(
      message.INPUT_CARNAME_ERROR
    );
  });

  it("공백을 포함한 자동차 이름에 대한 오류를 던져야 합니다", () => {
    expect(() => validateInputRacecar("car name")).toThrowError(
      message.INPUT_LETTERS_ERROR
    );
  });

  it("소문자가 아닌 자동차 이름에 대한 오류를 던져야 합니다", () => {
    expect(() => validateInputRacecar("CarName")).toThrowError(
      message.INPUT_LETTERS_ERROR
    );
  });
  it("중복 이름에 대한 오류를 던져야 합니다", () => {
    expect(() => validateInputRacecar("CarName")).toThrowError(
      message.INPUT_LETTERS_ERROR
    );
  });

  it("중복된 자동차 이름에 대한 오류를 던져야 합니다", () => {
    const carNames = ["car", "van", "car"];

    expect(() => validateRepeatedName(carNames)).toThrowError(
      message.UNIQUE_NAMES_ERROR
    );
  });

  it("유효한 자동차 이름에 대한 오류를 던지지 않아야 합니다", () => {
    expect(() => validateInputRacecar("car")).not.toThrow();
  });
});
