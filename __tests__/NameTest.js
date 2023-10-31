import {
  checkCarsNameCount,
  checkCarsArray,
  splitCarsArray,
} from "../src/userInterface.js";

describe("자동차 이름 확인", () => {
  test.each([",", ",,", ",,,", ",,,,", ",,,,,"])(
    "이름 없이 콤마만 입력한 경우",
    (input) => {
      expect(() => {
        const carsNameArray = splitCarsArray(input);
        checkCarsArray(carsNameArray);
      }).toThrow("[ERROR]");
    }
  );

  test("이름이 1개만 입력된 경우", () => {
    const input = "pobiwoni";
    expect(() => checkCarsNameCount(input)).toThrow("[ERROR]");
  });

  test.each([
    "pobiwoni",
    "pobiwoni,pobi",
    ",pobi",
    "",
    "pobi,",
    "pobi,pobi,",
    "pobi,,woni",
    "pobi,,,woni",
  ])("이름이 1글자 미만, 5글자를 초과한 경우", (input) => {
    const nameArray = input.split(",");
    expect(() => checkCarsArray(nameArray)).toThrow("[ERROR]");
  });
});
