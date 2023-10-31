import { SYSTEM } from '../constants/System.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class RacingController {
  async startGame() {
    const racingVehicleName = await InputView.readRacingVehicleName(SYSTEM.car);
    const racingCount = await InputView.readRacingCount();
    OutputView.print('\n실행 결과');
  }
}

export default RacingController;
