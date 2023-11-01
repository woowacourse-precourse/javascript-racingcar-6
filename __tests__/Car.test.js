import Car from "../src/Car.js";

describe("자동차 입력", () => {
  test("자동차 중복 입력 예외 처리", async () => {
    const input = ["pobi", "pobi", "woni"];

    expect(() => {
      Car.validateCarNameList(input);
    }).toThrow();
  });

  test("자동차 이름 길이가 6자 이상일 경우 예외 처리", async () => {
    const input = ["abcdefg", "hijk"];

    expect(() => {
      Car.validateCarNameList(input);
    }).toThrow();
  });

  test("자동차 입력이 쉼표로 마무리 되는 경우 예외 처리", async () => {
    const input = ["abcdefg,"];

    expect(() => {
      Car.validateCarNameList(input);
    }).toThrow();
  });

  test("자동차 입력에 쉼표를 제외한 특수문자가 있는 경우 예외 처리", async () => {
    const input = ["$#as", "asd!"];

    expect(() => {
      Car.validateCarNameList(input);
    }).toThrow();
  });
});
