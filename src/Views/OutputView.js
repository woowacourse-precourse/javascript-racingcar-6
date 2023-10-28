import { Console } from "@woowacourse/mission-utils";

const OUTPUTVIEW_MESSAGE = Object.freeze({
  executionResult: "실행결과",
});

export default class OutputView {
  static printResultMessage() {
    Console.print(OUTPUTVIEW_MESSAGE.executionResult);
  }
}
