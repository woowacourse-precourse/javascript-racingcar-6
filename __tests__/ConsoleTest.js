import { MissionUtils } from "@woowacourse/mission-utils";
import ConsoleOutput from "../src//views/ConsoleOutput.js";
import InputValidator from "../src/models/InputValidator.js";

describe("ConsoleOuput", () => {
  const printMessage = jest.spyOn(MissionUtils.Console, "print");

  test("should print an empty line", () => {
    ConsoleOutput.printEmptyLine();
    expect(printMessage).toHaveBeenCalledWith("");
  });

  test("should print the start message", () => {
    ConsoleOutput.printStartMessage();
    expect(printMessage).toHaveBeenCalledWith("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
  });

  test("should print the attempts message", () => {
    ConsoleOutput.printGetAttempts();
    expect(printMessage).toHaveBeenCalledWith("시도할 횟수는 몇 회인가요?");
  });

  test("should print the result message", () => {
    ConsoleOutput.printResultMessage();
    expect(printMessage).toHaveBeenCalledWith("실행 결과");
  });

  test("should print the game result", () => {
    const carPositions = { pobi: 3, woni: 5, jun: 2 };
    ConsoleOutput.printGameResult(carPositions);
    expect(printMessage).toHaveBeenCalledWith("pobi : ---");
    expect(printMessage).toHaveBeenCalledWith("woni : -----");
    expect(printMessage).toHaveBeenCalledWith("jun : --");
  });

  test("should print the game winner", () => {
    const winnerNames = ["pobi", "woni"];
    ConsoleOutput.printGameWinner(winnerNames);
    expect(printMessage).toHaveBeenCalledWith("최종 우승자 : pobi, woni");
  });
});

describe("ConsoleInput", () => {
  test("should validate input for getCarNames", () => {
    expect(() => InputValidator([""])).toThrow();
    expect(() => InputValidator(["1", "2"])).toThrow();
    expect(() => InputValidator(["a", "a"])).toThrow();
    expect(() => InputValidator(["abcdef"])).toThrow();
  });

  test("should validate input for getAttemps", () => {
    expect(() => InputValidator(NaN)).toThrow();
    expect(() => InputValidator(a)).toThrow();
  });
});
