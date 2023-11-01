import * as gameProgress from "../src/gameProgress.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("게임 진행", () => {
  test("자동차 별 랜덤 숫자 생성한다.", async () => {
    // given
    mockRandoms([4]);
    const players = [{ name: "cho", random: 0, move: "" }];

    // when
    const result = await gameProgress.getRandom(players);

    // then
    expect(result).toStrictEqual([{ name: "cho", random: 4, move: "" }]);
  });

  test("전진 여부를 파악한다.", async () => {
    // given
    const players = [
      { name: "cho", random: 4, move: "" },
      { name: "yoon", random: 0, move: "" },
    ];

    // when
    const result = await gameProgress.getMove(players);

    // then
    expect(result).toStrictEqual([
      { name: "cho", random: 4, move: "-" },
      { name: "yoon", random: 0, move: "" },
    ]);
  });

  test("실행 결과를 올바르게 출력한다.", async () => {
    // given
    MissionUtils.Console.print = jest.fn();
    const result = [
      { name: "cho", random: 4, move: "-" },
      { name: "yoon", random: 0, move: "" },
    ];

    // when
    await gameProgress.printResult(result);

    // then
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      expect.stringContaining("cho : -", "yoon : ", "\n")
    );
  });
});
