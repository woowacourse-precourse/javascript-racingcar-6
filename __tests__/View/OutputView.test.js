import { Console } from "@woowacourse/mission-utils";
import OutputView from "../../src/View/OutputView.js";
import { OUTPUT_MESSAGE } from "../../src/constants/message.js";

Console.print = jest.fn();

describe("OutputView 클래스 테스트", () => {
  test("printResultStartMessage 메서드를 가지고 있어야 한다.", () => {
    expect(typeof OutputView.printResultStartMessage).toBe("function");
  });

  test("printResultStartMessage가 호출되면 Console.print가 호출되야 한다.", () => {
    OutputView.printResultStartMessage();
    expect(Console.print).toBeCalledWith(OUTPUT_MESSAGE.RESULT_START);
  });

  test("printResult 메서드를 가지고 있어야 한다.", () => {
    expect(typeof OutputView.printResult).toBe("function");
  });

  test("printResult가 호출되면 Console.print가 호출되야 한다.", () => {
    const result = { position: 3, name: "junwoo" };
    OutputView.printResult(result);
    expect(Console.print).toBeCalledWith("junwoo : ---");
  });

  test("printBlank 메서드를 가지고 있어야 한다.", () => {
    expect(typeof OutputView.printBlank).toBe("function");
  });

  test("printBlank가 호출되면 Console.print가 호출되야 한다.", () => {
    OutputView.printBlank();
    expect(Console.print).toBeCalledWith("");
  });
});
