import { SYSTEM } from '../constants/System.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class RacingController {
  #racingModel;

  constructor(racingModel) {
    this.#racingModel = racingModel;
  }

  async startGame() {
    const racingVehicleName = await InputView.readRacingVehicleName(SYSTEM.car);
    const racingCount = await InputView.readRacingCount();

    this.#race(racingVehicleName, racingCount);
    OutputView.printFinalWinner(this.#racingModel.getFinalWinner());
  }

  #race(racingVehicleName, racingCount) {
    this.#setRacing(racingVehicleName);
    this.#raceAndPrintProgress(racingCount);
  }

  #setRacing(racingVehicleName) {
    this.#racingModel.saveNames(racingVehicleName);
  }

  #raceAndPrintProgress(racingCount) {
    OutputView.printProgress();
    for (let count = 1; count <= racingCount; count += 1) {
      this.#racingModel.race();
      OutputView.printRacingResult(this.#racingModel.getData());
    }
  }
}

export default RacingController;
