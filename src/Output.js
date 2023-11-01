import { Console } from "@woowacourse/mission-utils";
import { INFORMATION_MESSEAGE } from "./const/messageData.js";

const Output = {
  resultInformation() {
    Console.print(INFORMATION_MESSEAGE.RESULT_OUTPUT);
  },
  carMovement(name, current) {
    Console.print(
      `${name} : ${INFORMATION_MESSEAGE.MOVING_PROGRESS_MARK.repeat(current)}`
    );
  },
  winner(names) {
    Console.print(`${INFORMATION_MESSEAGE.WINNER}${names.join(", ")}`);
  },
};

export default Output;
