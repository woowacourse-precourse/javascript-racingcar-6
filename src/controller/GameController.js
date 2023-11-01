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

  async runGame() {
    await this.initGame();

    Console.print(MESSAGES.startRound);
    while (!this.gameModel.isGameOver()) {
      this.gameModel.playRound();

      const carModelDTOs = await this.gameModel.getCarModelDTOs();
      this.outputView.printAdvanceResult(carModelDTOs);
    }

    const winners = this.gameModel.getWinnersName();
    this.outputView.printWinner(winners);
  }

  async initGame() {
    const cars = await this.getCarsFromInput();
    const attemptNum = await this.getAttemptNumFromInput();

    this.gameModel = new GameModel(attemptNum, cars);
  }

  /**
   * 사용자에게 자동차 이름을 입력 받아 CarModel 배열을 생성하여 반환
   * @returns {CarModel[]} CarModel 배열
   */
  async getCarsFromInput() {
    const carNames = await this.inputView.getCarNames();
    return carNames.map((name) => new CarModel(name));
  }

  /**
   * 사용자에게 시도 횟수를 입력 받아 반환
   * @returns {number} 시도 횟수(number)
   */
  async getAttemptNumFromInput() {
    const attemptNum = await this.inputView.getAttemptNum();
    return attemptNum;
  }
}

export default GameController;
