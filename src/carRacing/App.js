import * as F from "./utility/utilityFunctions.js";
import { Console } from "@woowacourse/mission-utils";
import validateCarName from "./validation/validateCarName.js";
import validateRoundCount from "./validation/validateRountCount.js";
import Car from "./Car.js";
import validateNameListLength from "./validation/validateNameListLength.js";

class App {
  constructor() {}

  async play() {
    const { carNames, roundCount } = await this.enterGameBaseSetting();

    const carObjects = this.generateCarObjects(carNames);
    this.startRace(carObjects, roundCount);
    const winner = this.getWinners(carObjects);
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

      // min 으로 이름 변경
      validateNameListLength(filteredCarNames, 2);

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

  startRace(carObjects, roundCount) {
    F.go(
      F.range(roundCount),
      F.map(() => {
        carObjects.forEach((car) => car.move());
        this.printRaceStatus(carObjects);
      }),
    );
  }

  printRaceStatus(carObjects) {
    Console.print("");
    carObjects.forEach((car, index) => {
      Console.print(`${car.name}: ${"-".repeat(car.position)}`);
    });
  }

  getWinners(carObjects) {
    let winner = [];

    const maxPosition = Math.max(...carObjects.map((car) => car.position));

    winner = F.go(
      carObjects,
      F.filter((car) => car.position === maxPosition),
      F.map((car) => car.name),
    );

    return winner;
  }

  printGameResults() {}
}

export default App;
