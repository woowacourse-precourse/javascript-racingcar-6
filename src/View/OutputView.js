import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants/Message";

class OutputView {
  static printCarsPosition(cars) {
    Console.print(GAME_MESSAGE.printResult);
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
    });
  }

  static printWinner(winners) {
    Console.print(`${GAME_MESSAGE.printWinner}${winners.join(", ")}`);
  }
}

export default OutputView;
