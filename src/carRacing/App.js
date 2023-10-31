import * as F from "./utility/utilityFunctions.js";
import { Console } from "@woowacourse/mission-utils";
import validateCarName from "./validation/validateCarName.js";
import validateRoundCount from "./validation/validateRountCount.js";
import Car from "./Car.js";

class App {
  constructor() {}

  async play() {
    const { carNames, roundCount } = await this.enterGameBaseSetting();

    const carObjects = this.generateCarObjects(carNames);
  }

  async enterGameBaseSetting() {
    const carNames = await this.enterCarNames();
    const roundCount = await this.enterRoundCount();

    return {
      carNames,
      roundCount,
    };
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

  async enterRoundCount() {
    try {
      const userInput =
        await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

      const filteredRoundCount = F.go(
        [...userInput],
        F.filter((countElement) => validateRoundCount(countElement)),
        F.join(""),
        Number,
      );

      return filteredRoundCount;
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  generateCarObjects(carNamesList) {
    const carObjects = F.go(
      carNamesList,
      F.map((name) => new Car(name)),
    );

    return carObjects;
  }

  printRaceStatus() {}

  getWinners() {}

  printGameResults() {}
}

export default App;
