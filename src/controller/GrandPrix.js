import { InputView, OutputView } from '../view/index.js';
import RacingCarService from '../service/RacingCarService.js';

export default class GrandPrix {
  /**
   * @private
   * @type { RacingCarService }
   */
  #racingCarService;

  /**
   * @private
   * @type {number}
   */
  #lapNumber;

  /**
   * @async
   * @returns {Promise<void>}
   */
  async initialize() {
    const racingCarInput = await InputView.readRacingCarNames();
    const lapNumberInput = await InputView.readLapNumber();

    this.#racingCarService = new RacingCarService(racingCarInput);
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
      this.#racingCarService.setRacingGrid();
      OutputView.printRacingGrid(this.#racingCarService.getRacingGrid());
      lapCount += 1;
    }
    return this.#podium();
  }

  /**
   * @private
   * @returns {void}
   */
  #podium() {
    const winner = this.#racingCarService.getPodium();
    return OutputView.printRaceWinner(winner);
  }
}
