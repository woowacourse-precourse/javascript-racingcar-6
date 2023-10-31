import { Console } from "@woowacourse/mission-utils";

class ProgressOutput {
  gameInProgressPrint(name, hyphen) {
    Console.print(`${name} : ${hyphen}`);
  }
}

export default ProgressOutput;
