import { Random } from "@woowacourse/mission-utils";
import NUMBERS from "../../../../src/constants/numbers.js";
import HyphenAdd from "../../../../src/controller/game/HyphenAdd.js";
import TEST_NAME from "../../../../src/constants/testName";

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe("RacingGame hyphenAdd 테스트", () => {
  test("테스트 케이스 1: 확률에 따라 하이픈이 추가되어야 함", () => {
    // given
    const keyValue = [{ [TEST_NAME.carOne]: "" }, { [TEST_NAME.carTwo]: "" }, { [TEST_NAME.carThree]: "" }];
    const MOVING = NUMBERS.four;
    const STOP = NUMBERS.three;
    const randoms = [MOVING, STOP, MOVING];
    mockRandoms([...randoms]);
    // when
    const hyphenAdd = new HyphenAdd();
    hyphenAdd.Add(keyValue);

    // then
    expect(keyValue).toEqual([{ [TEST_NAME.carOne]: "-" }, { [TEST_NAME.carTwo]: "" }, { [TEST_NAME.carThree]: "-" }]);
  });

  test("테스트 케이스 2: 확률에 따라 하이픈이 추가되지 않아야 함", () => {
    // given
    const keyValue = [{ [TEST_NAME.carOne]: "" }, { [TEST_NAME.carTwo]: "" }, { [TEST_NAME.carThree]: "" }];
    const STOP = NUMBERS.three;
    const randoms = [STOP, STOP, STOP];
    mockRandoms([...randoms]);
    // when
    const hyphenAdd = new HyphenAdd();
    hyphenAdd.Add(keyValue);
    // then
    expect(keyValue).toEqual([{ [TEST_NAME.carOne]: "" }, { [TEST_NAME.carTwo]: "" }, { [TEST_NAME.carThree]: "" }]);
  });

  test("테스트 케이스 3: 확률에 따라 하이폰이 전부 추가 되어야 함", () => {
    // given
    const keyValue = [{ [TEST_NAME.carTwo]: "-" }, { [TEST_NAME.carFive]: "" }, { [TEST_NAME.carSix]: "---" }];
    const MOVING = NUMBERS.four;
    const randoms = [MOVING, MOVING, MOVING];
    mockRandoms([...randoms]);
    // when
    const hyphenAdd = new HyphenAdd();
    hyphenAdd.Add(keyValue);
    // then
    expect(keyValue).toEqual([{ [TEST_NAME.carTwo]: "--" }, { [TEST_NAME.carFive]: "-" }, { [TEST_NAME.carSix]: "----" }]);
  })
});
