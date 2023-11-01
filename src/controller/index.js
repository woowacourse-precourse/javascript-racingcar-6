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
    this.#racingModel.saveNames(racingVehicleName);
    OutputView.print('\n실행 결과');
    for (let count = 1; count <= racingCount; count += 1) {
      this.#racingModel.racing();
    }
  }
}

export default RacingController;
