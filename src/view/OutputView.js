import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/gameConfig.js";

const OutputView = {
  printRaceResult(name, movement) {
    MissionUtils.Console.print(`${name} : ${movement}`);
  },

  printResultMsg() {
    MissionUtils.Console.print(`\n${MESSAGE.game.result}`);
  },

  printWinners(winners) {
    MissionUtils.Console.print(`${MESSAGE.game.winners}${winners.join(", ")}`);
  },

  printBlankSpace() {
    MissionUtils.Console.print(" ");
  },
};

export default OutputView;
