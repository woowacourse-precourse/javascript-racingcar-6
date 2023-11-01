import Game from "../src/Game.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("실행 결과", () => {
  test("단일 라운드에 대한 상태 출력", () => {
    // given
    const carNameList = ["pobi", "woni", "jun"];
    const stateList = [
      [1, 0, 1],
      [2, 1, 2],
      [3, 2, 3],
      [4, 3, 4],
      [5, 4, 5],
    ];
    const outputList = [
      ["pobi : -", "woni : ", "jun : -"],
      ["pobi : --", "woni : -", "jun : --"],
      ["pobi : ---", "woni : --", "jun : ---"],
      ["pobi : ----", "woni : ---", "jun : ----"],
      ["pobi : -----", "woni : ----", "jun : -----"],
    ];
    const outputs = outputList.reduce((prev, next) => {
      return prev.concat(next);
    }, []);

    const game = new Game();
    game.carNameList = carNameList;
    const logSpy = getLogSpy();

    stateList.forEach((state, index) => {
      // when
      game.printState(state);

      // then
      expect(logSpy).toHaveBeenCalledWith(outputs[index]);
    });
  });

  test("전체 라운드에 대한 상태 출력", () => {
    // given
    const carNameList = ["pobi", "woni", "jun"];
    const stateLists = [
      [
        [1, 0, 1],
        [2, 1, 2],
        [3, 2, 3],
        [4, 3, 4],
        [5, 4, 5],
      ],
    ];
    const outputLists = [
      [
        [""],
        ["실행 결과"],
        ["pobi : -", "woni : ", "jun : -"],
        [""],
        ["pobi : --", "woni : -", "jun : --"],
        [""],
        ["pobi : ---", "woni : --", "jun : ---"],
        [""],
        ["pobi : ----", "woni : ---", "jun : ----"],
        [""],
        ["pobi : -----", "woni : ----", "jun : -----"],
        [""],
      ],
    ];

    const outputs = outputLists.reduce((result, innerArray) => {
      innerArray.forEach((subArray) => {
        result.push(...subArray);
      });
      return result;
    }, []);

    const game = new Game();
    game.carNameList = carNameList;
    const logSpy = getLogSpy();

    stateLists.forEach((result, index) => {
      // when
      game.result = result;
      game.printResult();

      // then
      expect(logSpy).toHaveBeenCalledWith(outputs[index]);
    });
  });
});
