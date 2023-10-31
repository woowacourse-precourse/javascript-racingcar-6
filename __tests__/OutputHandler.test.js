import { MissionUtils } from "@woowacourse/mission-utils";
import OutputHandler from "../src/OutputHandler.js";
import MESSAGE from "../src/constant/MESSAGE.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("메시지 출력", () => {
  test("게임을 시작할 때 '실행 결과' 출력하기", () => {
    const logSpy = getLogSpy();
    const result = [];
    OutputHandler.printGameExecution(result);
    expect(logSpy).toHaveBeenCalledWith(MESSAGE.GAME_RESULT);
  });

  test.each([
    [1, "-"],
    [3, "---"],
  ])("주어진 숫자만큼 하이픈 생성하기 - %d개", (number, expectedString) => {
    expect(OutputHandler.generateHyphens(number)).toBe(expectedString);
  });

  test.each([
    ["car", [{ name: "car", position: 1 }], ["car : -"]],
    [
      "car, bus",
      [
        { name: "car", position: 2 },
        { name: "bus", position: 3 },
      ],
      ["car : --", "bus : ---"],
    ],
  ])("라운드 결과 출력 - %s", (testName, roundArray, resultArray) => {
    const logSpy = getLogSpy();
    OutputHandler.printRoundResult(roundArray);
    [...resultArray, ""].forEach((result, index) =>
      expect(logSpy).toHaveBeenNthCalledWith(index + 1, result)
    );
  });
});
