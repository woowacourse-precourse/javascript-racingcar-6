import GameResult from "../src/GameResult";
import { Console } from "@woowacourse/mission-utils";

describe("GameResult 클래스", () => {
  const advance = {
    pobi: 5,
    crong: 4,
    wang: 5,
  };

  test("우승자 결정", () => {
    const gameResult = new GameResult(advance);
    const winners = gameResult.determineWinners();
    expect(winners).toEqual(["pobi", "wang"]);
  });

  test("우승자 출력", () => {
    const gameResult = new GameResult(advance);
    const consoleSpy = jest
      .spyOn(Console, "print")
      .mockImplementation(() => {});

    gameResult.printWinners();

    expect(consoleSpy).toHaveBeenCalledWith("최종 우승자 : pobi, wang");
    consoleSpy.mockRestore();
  });
});
