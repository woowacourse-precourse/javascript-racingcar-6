import { Console } from "@woowacourse/mission-utils";
import { GameMessages } from "./constants";

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
}

export default IOManager;
