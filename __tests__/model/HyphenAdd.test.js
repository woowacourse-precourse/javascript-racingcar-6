import { Random } from "@woowacourse/mission-utils";
import NUMBERS from "../../src/MVC/Constants/numbers.js";
import hyphenAdd from "../../src/MVC/controller/game/hyphenAdd.js";

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe("RacingGame hyphenAdd 테스트", () => {
  test("테스트 케이스 1: 확률에 따라 하이픈이 추가되어야 함", () => {
    // given
    const keyValue = [{ hyuri: "" }, { hyu: "" }, { rim: "" }];
    const MOVING = NUMBERS.four;
    const STOP = NUMBERS.three;
    const randoms = [MOVING, STOP, MOVING];
    mockRandoms([...randoms]);
    // when
    hyphenAdd(keyValue);

    // then
    expect(keyValue).toEqual([{ hyuri: "-" }, { hyu: "" }, { rim: "-" }]);
  });

  test("테스트 케이스 2: 확률에 따라 하이픈이 추가되지 않아야 함", () => {
    // given
    const keyValue = [{ hyuri: "" }, { hyu: "" }, { rim: "" }];
    const STOP = NUMBERS.three;
    const randoms = [STOP, STOP, STOP];
    mockRandoms([...randoms]);
    // when
    hyphenAdd(keyValue);
    // then
    expect(keyValue).toEqual([{ hyuri: "" }, { hyu: "" }, { rim: "" }]);
  });
});
