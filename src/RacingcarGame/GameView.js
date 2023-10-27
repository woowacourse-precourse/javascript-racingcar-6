import { MissionUtils } from "@woowacourse/mission-utils";
import { GameText } from "../message";

class GameView {
  async printGetMessage(message) {
    await MissionUtils.Console.print(message);
  }

  async printUserInput(userInput) {
    await MissionUtils.Console.print(userInput);
  }

  printCarProgress(car) {
    MissionUtils.Console.print(`${car.name} : ${car.getDisplay()}`);
  }

  printWinners(winners) {
    const winnerNames = winners.map((car) => car.name).join(", ");
    MissionUtils.Console.print(`최종 우승자 : ${winnerNames}`);
  }

  printGameMessage(message) {
    MissionUtils.Console.print(message);
  }
}

export default GameView;
