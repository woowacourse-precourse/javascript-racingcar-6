import { Console } from "@woowacourse/mission-utils";

class ProgressOutput {
  static gameInProgressPrint(name, hyphen) {
    Console.print(`${name} : ${hyphen}`);
  }
}

export default ProgressOutput;
