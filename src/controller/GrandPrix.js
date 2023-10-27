import { InputView } from '../view/index.js';
import RacingCarGrid from '../Model/RacingCarGrid.js';

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
    return this.test();
  }

  test() {
    console.log(this.#racingCarGrid.getRacingGrid());
  }
}
