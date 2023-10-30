import InputView from '../view/InputView.js';

class RacingController {
  async startGame() {
    const racingVehicleName = await InputView.readRacingVehicleName('자동차');
  }
}

export default RacingController;
