import ConsoleOutput from "../src//views/ConsoleOutput.js";
const MissionUtils = require("@woowacourse/mission-utils");

describe("ConsoleOuput", () => {
  const printMessage = jest.spyOn(MissionUtils.Console, "print");

  it("should print an empty line", () => {
    ConsoleOutput.printEmptyLine();
    expect(printMessage).toHaveBeenCalledWith("");
  });

  test("should print the start message", () => {
    ConsoleOutput.printStartMessage();
    expect(printMessage).toHaveBeenCalledWith("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
  });

  it("should print the attempts message", () => {
    ConsoleOutput.printGetAttempts();
    expect(printMessage).toHaveBeenCalledWith("시도할 횟수는 몇 회인가요?");
  });

  it("should print the result message", () => {
    ConsoleOutput.printResultMessage();
    expect(printMessage).toHaveBeenCalledWith("실행 결과");
  });

  it("should print the game result", () => {
    const carPositions = { pobi: 3, woni: 5, jun: 2 };
    ConsoleOutput.printGameResult(carPositions);
    expect(printMessage).toHaveBeenCalledWith("pobi : ---");
    expect(printMessage).toHaveBeenCalledWith("woni : -----");
    expect(printMessage).toHaveBeenCalledWith("jun : --");
  });

  it("should print the game winner", () => {
    const winnerNames = ["pobi", "woni"];
    ConsoleOutput.printGameWinner(winnerNames);
    expect(printMessage).toHaveBeenCalledWith("최종 우승자 : pobi, woni");
  });
});
