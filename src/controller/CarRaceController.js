import Car from "../models/Car.js";
import Race from "../models/Race.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";

class CarRaceController {
  constructor() {
    this.cars = [];
    this.race = null;
    this.totalRound = 0;
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async setup() {
    const carInput = await this.inputView.getCarNamesUserInput();
    this.cars = carInput.split(",").map((carName) => new Car(carName));

    const totalRoundInput = await this.inputView.getTotalRoundUserInput();
    this.totalRound = totalRoundInput;
  }

  startRace() {
    this.race = new Race(this.cars);
    this.outputView.printRoundResultInitMessage();
    for (let curRound = 0; curRound < this.totalRound; curRound++) {
      this.race.progressRound();
      this.outputView.printRoundStatus(this.race.getRoundResult());
    }
  }

  showResult() {
    this.outputView.printWinners(this.race.getWinners());
  }
}

export default CarRaceController;
