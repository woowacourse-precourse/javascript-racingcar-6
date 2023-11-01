import * as gameEnd from "../src/gameEnd.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("게임 종료", () => {
  test("전진 횟수에 따라 우승자를 결정한다.", async () => {
    // given
    const input = [
      { name: "cho", random: 4, move: "--" },
      { name: "yoon", random: 0, move: "---" },
    ];

    // when
    const result = await gameEnd.getWinner(input);

    // then
    expect(result).toStrictEqual(["yoon"]);
  });

  test("공동 우승일 경우 우승자를 ','로 구분하여 안내한다.", async () => {
    // given
    const winner = ["cho", "yoon"];
    MissionUtils.Console.print = jest.fn();

    // when
    await gameEnd.printWinner(winner);

    // then
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : cho, yoon")
    );
  });
});
