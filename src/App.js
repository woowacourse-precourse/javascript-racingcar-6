import { Console } from "@woowacourse/mission-utils";
import * as F from "./utility/utilityFunctions.js";
import InputReader from "./console/InputReader.js";
import Car from "./Car.js";

class App {
  constructor() {
    this.inputReader = new InputReader();
  }

  async play() {
    const { carNames, roundCount } = await this.enterGameBaseSetting();

    const carObjects = this.generateCarObjects(carNames);
    this.startRace(carObjects, roundCount);
    const winnerList = this.getWinners(carObjects);
    this.printGameResults(winnerList);
  }

  async enterGameBaseSetting() {
    const carNames = await this.inputReader.enterCarNames();
    const roundCount = await this.inputReader.enterRoundCount();

    return {
      carNames,
      roundCount,
    };
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
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
  }

  getWinners(carObjects) {
    let winnerList = [];

    const maxPosition = Math.max(...carObjects.map((car) => car.position));

    if (maxPosition === 0) throw new Error("[ERROR] 우승자가 없습니다.");

    winnerList = F.go(
      carObjects,
      F.filter((car) => car.position === maxPosition),
      F.map((car) => car.name),
    );

    return winnerList;
  }

  printGameResults(winnerList) {
    if (winnerList.length === 1) {
      Console.print("");
      Console.print(`최종 우승자 : ${winnerList[0]}`);
    } else {
      Console.print("");
      Console.print(`최종 우승자 : ${winnerList.join(", ")}`);
    }
  }
}

export default App;
