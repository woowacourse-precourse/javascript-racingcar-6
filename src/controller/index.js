import InputView from '../view/InputView.js';

class RacingCarController {
  async startGame() {
    const carNames = await InputView.readRacingCarNames();
    const racingCount = await InputView.readRacingCount();
  }
}

export default RacingCarController;
