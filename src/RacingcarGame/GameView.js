import { MissionUtils } from "@woowacourse/mission-utils";

class GameView {
  async printGetMessage(message) {
    await MissionUtils.Console.print(message);
  }

  async printUserInput(userInput) {
    await MissionUtils.Console.print(userInput);
  }

  printCarProgress(cars) {
    let progressMessage = "";
    cars.forEach((car) => {
      progressMessage += `${car.name} : ${car.getDisplay()}\n`;
    });

    MissionUtils.Console.print(progressMessage);
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
