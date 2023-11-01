import Race from "../models/race.js";
import RoundInputView from "../views/round-input-view.js";
import RoundResultView from "../views/round-result-view.js";
import WinnerView from "../views/winner-view.js";

const messages = {
  totalRoundFormatError: "[ERROR] 입력 형식이 잘못됐습니다.",
};

class RaceController {
  constructor() {
    this.race = new Race();
    this.roundInputView = new RoundInputView();
    this.roundResultView = new RoundResultView();
    this.winnerView = new WinnerView();
  }

  #checkValidTotalRound(totalRound) {
    const pattern = /^[0-9]+$/;

    return pattern.test(totalRound);
  }

  #toTotalRoundNumber(totalRound) {
    return parseInt(totalRound);
  }

  async init() {
    const totalRound = await this.roundInputView.getTotalRound();

    if (!this.#checkValidTotalRound(totalRound)) {
      throw new Error(messages.totalRoundFormatError);
    }

    const totalRoundNumber = this.#toTotalRoundNumber(totalRound);
    this.race.setTotalRound(totalRoundNumber);
  }

  #toCarNameAndLocation(car) {
    const name = car.getName();
    const location = car.getLocation();

    return {
      name,
      location,
    };
  }

  startRace(carController) {
    this.roundResultView.printResultStart();

    while(!this.race.checkIsRaceEnd()) {
      carController.moveCars();
      const cars = carController.cars;
      const currentRoundResults = cars.map(this.#toCarNameAndLocation);
      this.roundResultView.printCurrentRoundCars(currentRoundResults);
      this.race.goNextRound();
    }
  }

  prize(carController) {
    const furthestCars = carController.getFurthestCars();
    const carNames = furthestCars.map((car) => car.getName());
    this.winnerView.printWinner(carNames);
  }
}

export default RaceController;
