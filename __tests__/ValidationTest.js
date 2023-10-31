import {
  hasSameName,
  isIntegerNumber,
  isNameLengthUnderFive,
  isValidNameInput,
  isNoInput,
  isValidRoundInput,
} from "../src/utils/validation";

describe("유효성 검사 테스트", () => {
  test("이름 길이 검사", () => {
    const nameInput = "red";
    expect(() => isNameLengthUnderFive(nameInput)).not.toThrow();
  });

  test("같은 이름 검사", () => {
    const namesArr = ["red", "blue", "red"];
    expect(() => hasSameName(namesArr)).toThrow("[ERROR]");
  });

  test("유효한 이름 검사", () => {
    const namesArr = ["red", "blue", "pink"];
    expect(() => isValidNameInput(namesArr)).not.toThrow();
  });

  test("아무것도 입력 안함", () => {
    const input = "";
    expect(() => isNoInput(input)).toThrow("[ERROR]");
  });

  test("하나라도 입력함", () => {
    const input = "1";
    expect(() => isNoInput(input)).not.toThrow("[ERROR]");
  });

  test("유효한 라운드 검사", () => {
    const roundInput = "30";
    expect(() => isValidRoundInput(roundInput)).not.toThrow();
  });

  test("무효인 라운드 검사1", () => {
    const roundInput = "a1";
    expect(() => isValidRoundInput(roundInput)).toThrow("[ERROR]");
  });

  test("무효인 라운드 검사2", () => {
    const roundInput = "";
    expect(() => isValidRoundInput(roundInput)).toThrow("[ERROR]");
  });

  test("무효인 라운드 검사3", () => {
    const roundInput = "!";
    expect(() => isValidRoundInput(roundInput)).toThrow("[ERROR]");
  });

  test("무효인 라운드 검사4", () => {
    const roundInput = "";
    expect(() => isValidRoundInput(roundInput)).toThrow("[ERROR]");
  });

  test("숫자인지 검사", () => {
    const roundInput = 12;
    expect(() => isIntegerNumber(roundInput)).not.toThrow();
  });

  test("숫자 아닌지 검사", () => {
    const roundInput = "a";
    expect(() => isIntegerNumber(roundInput)).toThrow("[ERROR]");
  });
});
