import ResultManager from "../src/ResultManager.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("실행 결과 관리자", () => {
  test("한 자동차의 실행 결과 반환", () => {
    // given
    const COUNTINPUT = 5;
    const memberResultInputs = [true, true, false, false, true];
    const RESULT = 3;

    // when
    const resultManager = new ResultManager();

    // then
    expect(resultManager.countOneMemberResults(COUNTINPUT, memberResultInputs)).toEqual(RESULT);
  });

  test("입력한 라운드의 실행 결과 출력", () => {
    // given
    const COUNTINPUT = 2;
    const membersInput = ["jisoo", "suho"];
    const resultsInputs = [
      [true, true, false],
      [false, true, false],
    ];
    const outputs = ["jisoo : --", "suho : -"];
    const logSpy = getLogSpy();

    // when
    const resultManager = new ResultManager();
    resultManager.printOneRoundResults(COUNTINPUT, membersInput, resultsInputs);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("전체 라운드의 실행 결과 출력", () => {
    // given
    const COUNTINPUT = 5;
    const membersInputs = ["jisoo", "suho", "james"];
    const resultsInputs = [
      [true, true, false, true, true],
      [false, true, false, true, false],
      [false, false, true, false, false],
    ];
    const outputs = ["jisoo : ----", "suho : --", "james : -"];
    const logSpy = getLogSpy();

    // when
    const resultManager = new ResultManager();
    resultManager.printTotalRoundsResults(COUNTINPUT, membersInputs, resultsInputs);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("최종 라운드 결과 배열 반환", () => {
    // given
    const COUNTINPUT = 5;
    const membersInputs = ["jisoo", "suho", "james"];
    const resultsInputs = [
      [true, true, true, false, false],
      [false, true, false, true, true],
      [true, false, true, false, false],
    ];
    const outputs = [3, 3, 2];

    // when
    const resultManager = new ResultManager();

    // then
    expect(resultManager.selectFinalRound(COUNTINPUT, membersInputs, resultsInputs)).toEqual(outputs);
  });

  test("최종 우승자 출력", () => {
    // given
    const COUNTINPUT = 5;
    const membersInputs = ["jisoo", "suho", "james"];
    const resultsInputs = [
      [true, true, true, false, false],
      [false, true, false, true, true],
      [true, false, true, false, false],
    ];
    const winnerInput = [];
    const output = "최종 우승자 : jisoo,suho";
    const logSpy = getLogSpy();

    // when
    const resultManager = new ResultManager();
    resultManager.printWinner(COUNTINPUT, membersInputs, resultsInputs, winnerInput);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
