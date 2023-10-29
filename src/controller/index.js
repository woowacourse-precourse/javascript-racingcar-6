import RacingCarModel from '../model/index.js';
import InputView from '../view/InputView.js';

class RacingCarController {
  #model;

  constructor() {
    this.#model = new RacingCarModel();
  }

  async startGame() {
    const carNames = await InputView.readRacingCarNames();
    const racingCount = await InputView.readRacingCount();
    this.#model.saveCarNames(carNames);
    for (let i = 0; i < racingCount; i += 1) {
      this.#model.racing();
    }
  }
}

export default RacingCarController;
