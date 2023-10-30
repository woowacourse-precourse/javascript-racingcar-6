import Car from "../models/Car.js";
import Race from "../models/Race.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";

class CarRaceController {
  constructor() {
    this.cars = [];
    this.race = null;
    this.totalRound = 0;
    this.InputView = new InputView();
    this.OutputView = new OutputView();
  }

  async setup() {
    const carInput = await this.InputView.getCarNamesUserInput();
    this.cars = carInput.split(",").map((carName) => new Car(carName));

    const totalRoundInput = await this.InputView.getTotalRoundUserInput();
    this.totalRound = totalRoundInput;
  }

  startRace() {
    this.race = new Race(this.cars);
    this.OutputView.printRoundResultInitMessage();
    for (let curRound = 0; curRound < this.totalRound; curRound++) {
      this.race.progressRound();
      this.OutputView.printRoundStatus(this.race.getRoundResult());
    }
  }

  showResult() {
    this.OutputView.printWinners(this.race.getWinners());
  }
}

export default CarRaceController;
