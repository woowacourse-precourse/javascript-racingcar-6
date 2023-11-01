import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, StaticChar } from "../model/Constant.js";

const OutputView = {
  printRaceStartMessage() {
    Console.print(MESSAGE.RACE_START);
  },

  printRaceScore(name, score) {
    Console.print(MESSAGE.RACE_SCORE);
  },

  printNewRound() {
    Console.print("");
  },

  printGameWinnerMessage(winners) {
    Console.print(
      `${MESSAGE.RACE_WINNER}${winners.join(StaticChar.CAR_NAME_JOIN)}`
    );
  },
};

export default OutputView;
