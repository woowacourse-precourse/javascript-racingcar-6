import { Console } from "@woowacourse/mission-utils";
import * as F from "./utility/utilityFunctions.js";
import InputReader from "./console/InputReader.js";
import Car from "./Car.js";
import OutputPrinter from "./console/OutputPrinter.js";

class App {
  constructor() {
    this.inputReader = new InputReader();
    this.outputPrint = new OutputPrinter();
  }

  async play() {
    const { carNames, roundCount } = await this.enterGameBaseSetting();

    const carObjects = this.generateCarObjects(carNames);
    this.startRace(carObjects, roundCount);
    const winnerList = this.getWinners(carObjects);
    this.outputPrint.printGameResults(winnerList);
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
        this.outputPrint.printRaceStatus(carObjects);
      }),
    );
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
}

export default App;
