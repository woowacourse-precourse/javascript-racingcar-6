import { Console } from "@woowacourse/mission-utils";
import Car from "../models/Car.js";
import Race from "../models/Race.js";
import InputView from "../views/InputView.js";

// TODO Validtaion처리 및 Input별도로 분리할 것
class CarRaceController {
  constructor() {
    this.cars = [];
    this.race = null;
    this.totalRound = 0;
    this.InputView = new InputView();
  }

  async setup() {
    const carInput = await this.InputView.getCarNamesUserInput();
    this.cars = carInput.split(",").map((carName) => new Car(carName));

    const totalRoundInput = await this.InputView.getTotalRoundUserInput();
    this.totalRound = totalRoundInput;
  }

  startRace() {
    this.race = new Race(this.cars);
    Console.print("실행 결과");
    for (let curRound = 0; curRound < this.totalRound; curRound++) {
      this.race.progressRound();
      this.printRoundResult();
    }
  }

  showResult() {
    this.printWinners();
  }

  printRoundResult() {
    const roundResult = this.race.getRoundResult();
    roundResult.forEach((result) => {
      Console.print(`${result.name} : ${"-".repeat(result.position)}`);
    });
    Console.print("\n");
  }

  printWinners() {
    const winnerNames = this.race.getWinners();
    Console.print(`Winner: ${winnerNames.join(", ")}`);
  }
}

export default CarRaceController;
