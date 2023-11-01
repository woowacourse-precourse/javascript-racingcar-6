import { Console } from "@woowacourse/mission-utils";
import { GAME, MOVE } from "../utils/constants.js";

class Output {
  printGameResult() {
    Console.print(GAME.RUN_RESULT);
  }

  printCarStatusResult(cars) {
    cars.forEach((car) => {
      Console.print(
        `${car.getName()} : ${MOVE.DASH.repeat(car.getMoveCount())}`
      );
    });
    Console.print("");
  }

  printWinners(winners) {
    Console.print(`${GAME.WINNER} ${winners.join(",")}`);
  }
}
export default Output;
