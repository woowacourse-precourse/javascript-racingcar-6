import { InputView, OutputView } from '../view/index.js';
import RacingCarGrid from '../model/RacingCarGrid.js';

export default class GrandPrix {
  #racingCarGrid;

  #lapNumber;

  constructor() {
    this.#readGrandPrixInputs();
  }

  async #readGrandPrixInputs() {
    const racingCarInput = await InputView.readRacingCarNames();
    const moveAttemptInput = await InputView.readMoveAttemptNumber();

    this.#racingCarGrid = new RacingCarGrid(racingCarInput);
    this.#lapNumber = Number(moveAttemptInput);
    return this.#race();
  }

  #race() {
    let lapCount = 0;

    OutputView.printRaceResult();
    while (lapCount < this.#lapNumber) {
      this.#racingCarGrid.setRacingGrid();
      OutputView.printRacingGrid(this.#racingCarGrid.getRacingGrid());
      lapCount += 1;
    }
  }

  test() {
    console.log(this.#racingCarGrid.getRacingGrid());
  }
}
