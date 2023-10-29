import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MSG } from "../constants/messages.js";

const outputView = {
  raceResultTitle() {
    Console.print(OUTPUT_MSG.RESULT);
  },

  raceResult(name, count) {
    const movingRecord = "-".repeat(count);
    Console.print(`${name} : ${movingRecord}`);
  },

  raceResultNewLine() {
    Console.print("");
  },

  winner() {},
};

export default outputView;
