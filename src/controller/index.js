import InputView from '../view/InputView.js';

class RacingCarController {
  async startGame() {
    const carNames = await InputView.readRacingCarNames();
  }
}

export default RacingCarController;
