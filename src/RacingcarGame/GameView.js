import { MissionUtils } from "@woowacourse/mission-utils";
import { GameText } from "../message";

class GameView {
  async printGetCarname() {
    await MissionUtils.Console.print(GameText.GET_CAR_NAME);
  }

  async printGetAttempts() {
    await MissionUtils.Console.print(GameText.GET_GAME_ATTEMPTS);
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
}

export default GameView;
