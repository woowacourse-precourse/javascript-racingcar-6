import { Console } from "@woowacourse/mission-utils";

const OUTPUTVIEW_MESSAGE = Object.freeze({
  executionResult: "실행결과",
  finalWinner: "최종 우승자",
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
    result.push(""); // 한 라운드 출력 후,다음 라운드 출력 전 한 줄의 공백을 주기 위해 추가
    Console.print(result.join("\n"));
  }

  static printWinner(winners) {
    Console.print(`${OUTPUTVIEW_MESSAGE.finalWinner} : ${winners}`);
  }
}
