import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constant";

const Output = {
  racingResult() {
    Console.print(MESSAGE.turn);
  },
  winner(nameList) {
    Console.print(MESSAGE.end + nameList.map((name) => name).join(', '));
  },
}

export default Output;