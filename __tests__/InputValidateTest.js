import InputValidator from "../src/utils/InputValidator.js";

describe("입력값 유효성 검사 테스트", () => {
  test("이름에 아무 값도 입력하지 않은 경우를 확인", () => {
    const nameInput = "";

    expect(() => {
      InputValidator.validateCarName(nameInput);
    }).toThrow();
  });

  test("이름에 공백이 포함되어 있는 경우를 확인", () => {
    const nameInput = [" pobi", "ju ne", "   w"];

    nameInput.forEach((name) => {
      expect(() => {
        InputValidator.validateCarName(name);
      }).toThrow();
    });
  });

  test("이름이 서로 중복되어 있는 경우를 확인", () => {
    const nameInput = ["pobi", "june", "pobi"];

    expect(() => {
      InputValidator.validateCarName(nameInput);
    }).toThrow();
  });

  test("횟수에 숫자가 아닌 경우를 확인", () => {
    const triesInput = ["12d", ".+", "string"];

    triesInput.forEach((times) => {
      expect(() => {
        InputValidator.validateTimesNumber(times);
      }).toThrow();
    });
  });

  test("횟수에 0이 입력된 경우를 확인", () => {
    const triesInput = ["0", ""];

    triesInput.forEach((times) => {
      expect(() => {
        InputValidator.validateTimesNumber(times);
      }).toThrow();
    });
  });
});
