import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";

class OutputHandler {
  static printInitialExecutionMessage() {
    Console.print(MESSAGE.INITIAL_RACE_EXECUTION);
  }
}

export default OutputHandler;
