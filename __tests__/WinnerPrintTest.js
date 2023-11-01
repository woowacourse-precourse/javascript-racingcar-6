import Game from "../src/Game.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("최종 우승자", () => {
  test("단독 우승자", () => {
    // given
    const winnerLists = [["pobi"], ["a"], ["12345"]];
    const outputs = [
      "최종 우승자 : pobi",
      "최종 우승자 : a",
      "최종 우승자 : 12345",
    ];
    const game = new Game();
    const logSpy = getLogSpy();

    winnerLists.forEach((winnerList, index) => {
      // when
      game.winnerList = winnerList;
      game.printWinnerList(winnerList);

      // then
      expect(logSpy).toHaveBeenCalledWith(outputs[index]);
    });
  });

  test("공동 우승자", () => {
    // given
    const winnerLists = [["pobi, a"], ["a, b, c"], ["12345, jun, abc, z"]];
    const outputs = [
      "최종 우승자 : pobi, a",
      "최종 우승자 : a, b, c",
      "최종 우승자 : 12345, jun, abc, z",
    ];
    const game = new Game();
    const logSpy = getLogSpy();

    winnerLists.forEach((winnerList, index) => {
      // when
      game.winnerList = winnerList;
      game.printWinnerList(winnerList);

      // then
      expect(logSpy).toHaveBeenCalledWith(outputs[index]);
    });
  });
});
