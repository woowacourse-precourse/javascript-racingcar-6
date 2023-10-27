import InputView from '../view/InputView.js';

class RacingCarController {
  startGame() {
    const carNames = InputView.readRacingCarNames();
  }
}

export default RacingCarController;
