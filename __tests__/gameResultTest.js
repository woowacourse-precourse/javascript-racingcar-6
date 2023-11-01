import App from "../src/App.js";
import { getWinList, printResult } from "../src/racingGame/utils/gameFn.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("결과 출력 (단독우승)", () => {
  test("결과 출력", async () => {
    // given
    const inputs = [
      {
        name: "hong",
        moveCount: 5,
      },
      {
        name: "woni",
        moveCount: 2,
      },
      {
        name: "che12",
        moveCount: 5,
      },
    ];
    const maxMove = 5;
    const result = "최종우승자 : hong, che12";
    const logSpy = getLogSpy();

    printResult(getWinList(inputs, maxMove));

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(result));
  });

  test("결과 출력 (단독우승)", async () => {
    // given
    const inputs = [
      {
        name: "hong",
        moveCount: 3,
      },
      {
        name: "woni",
        moveCount: 2,
      },
      {
        name: "che12",
        moveCount: 4,
      },
    ];
    const maxMove = 4;
    const result = "최종우승자 : che12";
    const logSpy = getLogSpy();

    printResult(getWinList(inputs, maxMove));

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(result));
  });
});
