import { Console } from "@woowacourse/mission-utils";
import { RACE_GAME_OUTPUT_MESSAGE } from "../constants.js";

class OutputView {
  printRoundResultInitMessage() {
    Console.print(RACE_GAME_OUTPUT_MESSAGE.roundResultInit);
  }

  printRoundStatus(roundResult) {
    roundResult.forEach((result) => {
      Console.print(
        `${result.name} : ${RACE_GAME_OUTPUT_MESSAGE.progressStatus.repeat(
          result.position
        )}`
      );
    });
    Console.print("\n");
  }

  printWinners(winnerNames) {
    Console.print(
      `${RACE_GAME_OUTPUT_MESSAGE.winners}: ${winnerNames.join(", ")}`
    );
  }
}

export default OutputView;
