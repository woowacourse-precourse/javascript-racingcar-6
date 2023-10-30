import { Console } from "@woowacourse/mission-utils";
import { GameMessages } from "./constants.js";

class IOManager {
  async getUserInput(question) {
    return await Console.readLineAsync(question);
  }

  async getCarsName() {
    const cars = await this.getUserInput(GameMessages.INPUT_CARS_NAME);
    return cars.split(',').map((name) => name.trim());
  }

  async getRaceCount() {
    return await this.getUserInput(GameMessages.INPUT_RACE_COUNT);
  }

  printExecuteMessage() {
    return Console.print(GameMessages.EXECUTE_MESSAGE);
  }

  printCurrentPosition(carName, position) {
    return Console.print(carName + ' : ' + '-'.repeat(position))
  }

  printWinner(winnerCarName) {
    return Console.print(GameMessages.FINAL_WINNER + winnerCarName);
  }
}

export default IOManager;
