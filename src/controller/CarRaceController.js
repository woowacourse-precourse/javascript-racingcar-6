import Car from "../models/Car.js";
import Race from "../models/Race.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";

class CarRaceController {
  constructor() {
    this.race = null;
    this.totalRound = 0;
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async setup() {
    const carNamesInput = await this.inputView.getCarNamesUserInput();
    const cars = carNamesInput.split(",").map((carName) => new Car(carName));
    this.race = new Race(cars);

    const totalRoundInput = await this.inputView.getTotalRoundUserInput();
    this.totalRound = totalRoundInput;
  }

  startRace() {
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
