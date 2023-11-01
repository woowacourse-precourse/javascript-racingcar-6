import RacingModel from '../model/index.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class RacingController {
  /** @private */
  #racingModel;

  /** @private */
  #vehicle;

  /**
   * @param {RacingModel} racingModel
   * @param {string} vehicle
   */
  constructor(racingModel, vehicle) {
    this.#racingModel = racingModel;
    this.#vehicle = vehicle;
  }

  async startGame() {
    const racingVehicleName = await InputView.readRacingVehicleName(this.#vehicle);
    const racingCount = await InputView.readRacingCount();

    this.#race(racingVehicleName, racingCount);
    OutputView.printFinalWinner(this.#racingModel.getFinalWinner());
  }

  /**
   * @param {string} racingVehicleName
   * @param {number} racingCount
   */
  #race(racingVehicleName, racingCount) {
    this.#setRacing(racingVehicleName);
    this.#raceAndPrintProgress(racingCount);
  }

  /**
   * @param {string} racingVehicleName
   */
  #setRacing(racingVehicleName) {
    this.#racingModel.saveNames(racingVehicleName);
  }

  /**
   * @param {number} racingCount
   */
  #raceAndPrintProgress(racingCount) {
    OutputView.printProgress();
    for (let count = 1; count <= racingCount; count += 1) {
      this.#racingModel.race();
      OutputView.printRacingResult(this.#racingModel.getData());
    }
  }
}

export default RacingController;
