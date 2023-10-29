import RacingCarModel from '../model/index.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class RacingCarController {
  #model;

  constructor() {
    this.#model = new RacingCarModel();
  }

  async startGame() {
    const carNames = await InputView.readRacingCarNames();
    const racingCount = await InputView.readRacingCount();
    this.#model.saveCarNames(carNames);
    OutputView.print('실행 결과');
    for (let i = 0; i < racingCount; i += 1) {
      this.#model.racing();
      OutputView.printProgress(this.#model.getCarData());
    }
  }
}

export default RacingCarController;
