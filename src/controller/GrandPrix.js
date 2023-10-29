import { InputView, OutputView } from '../view/index.js';
import RacingCarGrid from '../model/RacingCarGrid.js';

export default class GrandPrix {
  #racingCarGrid;

  #lapNumber;

  /**
   * @async
   * @returns {Promise<void>}
   */
  async initialize() {
    const racingCarInput = await InputView.readRacingCarNames();
    const lapNumberInput = await InputView.readLapNumber();

    this.#racingCarGrid = new RacingCarGrid(racingCarInput);
    this.#lapNumber = Number(lapNumberInput);
    return this.#race();
  }

  /**
   * @private
   * @returns {void}
   */
  #race() {
    let lapCount = 0;

    OutputView.printLapResult();
    while (lapCount < this.#lapNumber) {
      this.#racingCarGrid.setRacingGrid();
      OutputView.printRacingGrid(this.#racingCarGrid.getRacingGrid());
      lapCount += 1;
    }
    return this.#podium();
  }

  /**
   * @private
   * @returns {void}
   */
  #podium() {
    const winner = this.#racingCarGrid.getPodium();
    return OutputView.printRaceWinner(winner);
  }
}
