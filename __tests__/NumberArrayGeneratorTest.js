import NumberArrayGenerator from "../src/NumberArrayGenerator.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("랜덤값 생성기", () => {
  test("랜덤값에 대해 boolean 값 반환", () => {
    // given
    const INPUT = 8;
    const output = true;
    const randomNumber = [INPUT];

    mockRandoms([...randomNumber]);

    // when
    const numberArrayGenerator = new NumberArrayGenerator();

    // then
    expect(numberArrayGenerator.createRandomNumbers()).toEqual(output);
  });

  test("랜덤값에 대한 boolean 값 배열 반환", async () => {
    // given
    const randomNumber = [8, 0, 4, 9];
    const inputName = ["bear", "dog"];
    const INPUTNUMBER = 2;
    const bearResult = [true, true];
    const dogResult = [false, true];
    const outputs = [bearResult, dogResult];

    mockRandoms([...randomNumber]);

    // when
    const numberArrayGenerator = new NumberArrayGenerator();

    // then
    const result = numberArrayGenerator.createRandomArray(inputName, INPUTNUMBER);
    expect(result).toEqual(outputs);
  });
});
