import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, StaticChar } from "../model/Constant.js";

const OutputView = {
  printRaceStartMessage() {
    Console.print(MESSAGE.RACE_START);
  },

  printRaceScore(name, score) {
    Console.print(`${name} : ${StaticChar.CAR_DISTANCE.repeat(score)}`);
  },

  printNewRound() {
    Console.print(StaticChar.CAR_NAME_BLANK);
  },

  printGameWinnerMessage(winners) {
    Console.print(
      `${MESSAGE.RACE_WINNER}${winners.join(StaticChar.CAR_NAME_JOIN)}`
    );
  },
};

export default OutputView;
