import OutputView from "../src/Views/OutputView.js";
import { Console } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("OutputView 기능 테스트", () => {
  test("printResultMessage 메서드 - 실행결과 출력", () => {
    // given
    const logSpy = getLogSpy();
    const output = "실행결과";

    // when
    OutputView.printResultMessage();

    // then
    expect(logSpy).toHaveBeenCalledWith(output);
  });

  test("printOneRound - 한 라운드 결과 출력", () => {
    // given
    const inputs = [
      { name: "hani", totalDistance: 6 },
      { name: "daniel", totalDistance: 3 },
    ];
    const outputs = ["hani : ------"];
    const logSpy = getLogSpy();

    // when
    OutputView.printOneRound(inputs);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("printWinner - 최종 우승자 출력", () => {
    // given
    const input = "hani,daniel";
    const output = "최종 우승자 : hani,daniel";
    const logSpy = getLogSpy();

    // when
    OutputView.printWinner(input);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
