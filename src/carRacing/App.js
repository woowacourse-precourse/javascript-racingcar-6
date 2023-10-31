import * as F from "./utility/utilityFunctions.js";
import { Console } from "@woowacourse/mission-utils";
import validateCarName from "./validation/validateCarName.js";

class App {
  constructor() {}

  async play() {
    await this.enterGameBaseSetting();
  }

  async enterGameBaseSetting() {
    const enteredCarNames = await this.enterCarNames();

    Console.print(enteredCarNames);
  }

  async enterCarNames() {
    try {
      const userInput = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
      );

      const carNamesList = userInput.split(",");

      const filteredCarNames = F.go(
        carNamesList,
        F.filter((carName) => validateCarName(carName, 5)),
      );

      return filteredCarNames;
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
