import { MissionUtils } from "@woowacourse/mission-utils";
import View from "../src/View.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Input 테스트", () => {
  // Car Names
  test("빈 문자열 입력", () => {
    const emptyString = "";
    mockQuestions([emptyString]);
    expect(View.Input.inputCarNames()).rejects.toThrow("[ERROR]");
  });
  test("이름에 빈 문자열 입력", () => {
    const emptyString = "pobi,,woni";
    mockQuestions([emptyString]);
    expect(View.Input.inputCarNames()).rejects.toThrow("[ERROR]");
  });
  test("이름이 1자 이상 5자 이하가 아닌 경우", () => {
    const emptyString = "pobi,woni,abcdefg";
    mockQuestions([emptyString]);
    expect(View.Input.inputCarNames()).rejects.toThrow("[ERROR]");
  });

  // Count
  test("빈 문자열 입력", () => {
    const emptyString = "";
    mockQuestions([emptyString]);
    expect(View.Input.inputCount()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수가 0 이하인 경우", () => {
    const emptyString = "-1";
    mockQuestions([emptyString]);
    expect(View.Input.inputCount()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수가 숫자가 아닌 경우", () => {
    const emptyString = "a";
    mockQuestions([emptyString]);
    expect(View.Input.inputCount()).rejects.toThrow("[ERROR]");
  });
});

describe("Output 테스트", () => {
  test("printResultMessage 테스트", () => {
    const logSpy = getLogSpy();
    View.Output.printResultMessage();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("실행 결과"));
  });

  test("printResult 테스트", () => {
    const logSpy = getLogSpy();
    const result = [
      { carName: "pobi", distance: 1 },
      { carName: "woni", distance: 0 },
      { carName: "jun", distance: 1 },
    ];
    View.Output.printResult(result);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("pobi : -"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("woni : "));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("jun : -"));
  });

  test("printWinner 테스트", () => {
    const logSpy = getLogSpy();
    const winner = ["pobi", "jun"];
    View.Output.printWinner(winner);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자: pobi, jun")
    );
  });
});
