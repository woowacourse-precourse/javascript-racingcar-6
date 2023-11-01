import { splitInputCarName } from "../src/racingGame/utils/validation.js";

describe("자동차 이름 입력 처리", () => {
  test("쉼표로 자동차 이름 구분", () => {
    const input = "test,car2,che";
    const output = ["test", "car2", "che"];

    expect(splitInputCarName(input)).toEqual(expect.arrayContaining(output));
  });
});
