import { Console } from "@woowacourse/mission-utils";
import Game from "../src/Game.js";
import App from "../src/App.js";

describe("최종 우승자 테스트", () => {
  function manipulateCompareResult(game, compareResult) {
    for (const car of game.getCarList()) {
      const name = car.getName();
      const firstCompareResult = compareResult.get(name)[0];
      const secondCompareResult = compareResult.get(name)[1];

      car.isFasterThan = jest.fn().mockReturnValue(firstCompareResult);
      car.isSameAs = jest.fn().mockReturnValue(secondCompareResult);
    }
  }

  // 최종 우승자 결정하기
  test("최종 우승자 결정하기 기능", async () => {
    const game = new Game();
    const input = "a,b,c";
    const finalWinnerList = ["b", "c"];
    const compareResult = new Map([
      ["a", [false, false]],
      ["b", [true, false]],
      ["c", [false, true]],
    ]);

    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    await game.inputCarName();

    manipulateCompareResult(game, compareResult);
    game.decideFinalWinner();
    expect(game.getFinalWinnerList()).toEqual(finalWinnerList);
  });

  // 최종 우승자 출력하기
  test("최종 우승자 출력하기 기능", async () => {
    const game = new Game();
    const input = "a,b,c";
    const finalResultMessage = "최종 우승자 : b, c";
    const compareResult = new Map([
      ["a", [false, false]],
      ["b", [true, false]],
      ["c", [false, true]],
    ]);
    const spyFn = jest.spyOn(Console, "print");

    Console.readLineAsync = jest.fn().mockResolvedValue(input);
    await game.inputCarName();

    manipulateCompareResult(game, compareResult);
    game.decideFinalWinner();
    App.printFinalResultMessage(game);
    expect(spyFn).toHaveBeenCalledWith(finalResultMessage);
  });
});
