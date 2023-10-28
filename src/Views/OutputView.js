import { Console } from "@woowacourse/mission-utils";

const OUTPUTVIEW_MESSAGE = Object.freeze({
  executionResult: "실행결과",
});

export default class OutputView {
  static #ONE_STEP = "-";

  static printResultMessage() {
    Console.print(OUTPUTVIEW_MESSAGE.executionResult);
  }

  static printOneRound(carsStatus) {
    const result = [];
    carsStatus.forEach(({ name, totalDistance }) => {
      result.push(`${name} : ${this.#ONE_STEP.repeat(totalDistance)}`);
    });
    Console.print(result.join("\n"));
  }
}
