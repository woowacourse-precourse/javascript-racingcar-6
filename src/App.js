import { Console } from "@woowacourse/mission-utils";
import * as F from "./utility/utilityFunctions.js";
import InputReader from "./console/InputReader.js";
import Car from "./units/Car.js";
import OutputPrinter from "./console/OutputPrinter.js";
import Referee from "./units/Referee.js";

class App {
  constructor() {
    this.inputReader = new InputReader();
    this.outputPrint = new OutputPrinter();
    this.referee = new Referee();
  }

  async play() {
    const { carNames, roundCount } = await this.enterGameBaseSetting();
    const carObjects = this.generateCarObjects(carNames);

    this.startRace(carObjects, roundCount);

    const winnerList = this.referee.getWinners(carObjects);
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
}

export default App;
