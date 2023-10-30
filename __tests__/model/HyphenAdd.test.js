import RacingGame from "../../src/MVC/model/RacingGame.js";
import { Random } from "@woowacourse/mission-utils";
import NUMBERS from "../../src/MVC/Constants/numbers.js";

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe("RacingGame hyphenAdd 테스트", () => {
  test("테스트 케이스 1: 확률에 따라 하이픈이 추가되어야 함", () => {
    const racingGame = new RacingGame();
    const keyValue = [{ hyuri: "" }, { hyu: "" }, { rim: "" }];
    const MOVING = NUMBERS.four;
    const STOP = NUMBERS.three;
    const randoms = [MOVING, STOP, MOVING];
    mockRandoms([...randoms]);

    racingGame.hyphenAdd(keyValue);

    // 모의 함수의 반환값에 따라 값이 변경되었는지 확인
    expect(keyValue).toEqual([{ hyuri: "-" }, { hyu: "" }, { rim: "-" }]);
  });

  test("테스트 케이스 2: 확률에 따라 하이픈이 추가되지 않아야 함", () => {
    const racingGame = new RacingGame();
    const keyValue = [{ hyuri: "" }, { hyu: "" }, { rim: "" }];
    const STOP = NUMBERS.three;
    const randoms = [STOP, STOP, STOP];
    mockRandoms([...randoms]);

    racingGame.hyphenAdd(keyValue);

    // 모의 함수의 반환값에 따라 값이 변경되지 않았는지 확인
    expect(keyValue).toEqual([{ hyuri: "" }, { hyu: "" }, { rim: "" }]);
  });
});
