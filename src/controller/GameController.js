import CarModel from '../models/CarModel.js';
import GameModel from '../models/GameModel.js';
import InputView from '../views/InputView.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.gameModel = null;
  }

  async startGame() {
    const cars = await this.inputCars();
    const attemptNum = await this.inputAttemptNum();

    this.gameModel = new GameModel(attemptNum, cars);

    while (!this.gameModel.isGameOver()) {
      this.gameModel.playRound();
    }
  }

  async inputCars() {
    const carNames = await this.inputView.getCarNames();
    return carNames.map((name) => new CarModel(name));
  }

  async inputAttemptNum() {
    const attemptNum = await this.inputView.getAttemptNum();
    return attemptNum;
  }
}

export default GameController;
