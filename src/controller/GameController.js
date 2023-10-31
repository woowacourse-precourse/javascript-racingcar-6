import { Console } from '@woowacourse/mission-utils';
import CarModel from '../models/CarModel.js';
import GameModel from '../models/GameModel.js';
import InputView from '../views/InputView.js';
import { MESSAGES } from '../constants/messages.js';
import OutputView from '../views/OutputView.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.gameModel = null;
  }

  async startGame() {
    await this.initGame();

    Console.print(MESSAGES.startRound);

    while (!this.gameModel.isGameOver()) {
      this.gameModel.playRound();

      const carModels = await this.gameModel.getCarModels();
      this.outputView.printAdvanceResult(carModels);
    }

    const winners = this.gameModel.getWinnersName();
    this.outputView.printWinner(winners);
  }

  async initGame() {
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
