import OutputView from '../../src/view/OutputView';
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("OutputView outputWinnerName", () => {
	test("outputWinnerName은 Function type이다 ", () => {
		expect(typeof OutputView.outputWinnerName).toBe("function");
	})
	test("Console.print가 호출된다 ", () => {
		MissionUtils.Console.print = jest.fn();
		OutputView.outputWinnerName();
		expect(MissionUtils.Console.print).toHaveBeenCalled();
	})
  const testCases = [
    { output: "pobi, woni", expected: "pobi, woni" },
    { output: "alice, bob", expected: "alice, bob" },
    { output: "123", expected: "123" },
    { output: undefined, expected: undefined },
    { output: "", expected: "" }
  ];
  test('outputView outputWinnerName은 정상적으로 값을 출력한다. ', () => {
    testCases.forEach (({output, expected}) => {
      const logSpy = getLogSpy();
      OutputView.outputWinnerName(output);
      expect(logSpy).toHaveBeenCalledWith(expected);
    });
  });
});