import OutputView from "../src/view/OutputView.js";
import { Console } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("출력 값 테스트", () => {
  const logSpy = getLogSpy();

  test("이동 시 마크 출력 테스트", () => {
    const inputValues = [
      ["pobi", 3],
      ["june", 4],
      ["wang", 5],
    ];
    const expectedResults = ["pobi : ---", "june : ----", "wang : -----"];

    inputValues.forEach(([name, distance], index) => {
      OutputView.printMoveMarking(name, distance);
      expect(logSpy).toHaveBeenCalledWith(expectedResults[index]);
    });
  });

  test("우승자 출력 테스트", () => {
    const winners = [["pobi"], ["pobi", "june"], ["pobi", "june", "wang"]];
    const expectedResults = [
      "최종 우승자 : pobi",
      "최종 우승자 : pobi, june",
      "최종 우승자 : pobi, june, wang",
    ];

    winners.forEach((winners, index) => {
      OutputView.printWinnerMessage(winners);
      expect(logSpy).toHaveBeenCalledWith(expectedResults[index]);
    });
  });
});
