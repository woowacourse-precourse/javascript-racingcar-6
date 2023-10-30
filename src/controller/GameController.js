import CarModel from '../models/CarModel';
import GameModel from '../models/GameModel';
import InputView from '../views/InputView';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.gameModel = null;
  }

  async startGame() {
    const cars = await this.inputCars();
    const attemptNum = await this.inputAttemptNum();

    this.gameModel = new GameModel(attemptNum, cars);
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
