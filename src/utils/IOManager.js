import { Console } from "@woowacourse/mission-utils";
import { GameMessages } from "./constants.js";
import InputValidator from "./InputValidator.js";

class IOManager {
  async getUserInput(question) {
    return await Console.readLineAsync(question);
  }

  async getCarsName() {
    const cars = await this.getUserInput(GameMessages.INPUT_CARS_NAME);
    const carsName = cars.split(',').map((name) => name.trim());
    InputValidator.validateRaceCarNameInput(carsName);
    return carsName;
  }

  async getRaceCount() {
    const raceCount = await this.getUserInput(GameMessages.INPUT_RACE_COUNT);
    InputValidator.validateRaceCountInput(raceCount);
    return raceCount;
  }

  printExecuteMessage() {
    return Console.print(GameMessages.EXECUTE_MESSAGE);
  }

  printCurrentPosition(carName, position) {
    return Console.print(carName + ' : ' + '-'.repeat(position))
  }

  printWinner(winnerCarName) {
    return Console.print(GameMessages.FINAL_WINNER + winnerCarName.map((carName) => carName).join(', '));
  }
}

export default IOManager;
