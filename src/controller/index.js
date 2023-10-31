import { SYSTEM } from '../constants/System.js';
import InputView from '../view/InputView.js';

class RacingController {
  async startGame() {
    const racingVehicleName = await InputView.readRacingVehicleName(SYSTEM.car);
    const racingCount = await InputView.readRacingCount();
  }
}

export default RacingController;
