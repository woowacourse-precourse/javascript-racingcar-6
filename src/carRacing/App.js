import { Console } from "@woowacourse/mission-utils";
import validateNameLength from "./validation/validateNameLength.js";
import * as F from "./utility/utilityFunctions.js";

class App {
  constructor() {}

  async play() {
    await this.enterGameBaseSetting();
  }

  async enterGameBaseSetting() {
    const enteredCarNames = await this.enterCarNames();
  }

  async enterCarNames() {
    try {
      let carNamesList = [];

      const userInput = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
      );

      carNamesList = userInput.split(",");

      return carNamesList;
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  enterRoundCount() {}

  printRaceStatus() {}

  getWinners() {}

  printGameResults() {}
}

export default App;
