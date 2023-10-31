import { Console } from '@woowacourse/mission-utils';
import CarModel from '../models/CarModel.js';
import GameModel from '../models/GameModel.js';
import InputView from '../views/InputView.js';
import { MESSAGES } from '../constants/messages.js';
import OutputView from '../views/OutputView.js';

/**
 * 게임을 진행하는 Controller
 */
class GameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.gameModel = null;
  }

  /**
   * 게임 시작
   * 1. 게임 초기화
   * 2. 시도 횟수만큼 라운드 진행
   * 3. 결과 출력
   */
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

  /**
   * 게임 초기화 함수.
   * GameModel 인스턴스를 생성하여 저장
   */
  async initGame() {
    const cars = await this.inputCars();
    const attemptNum = await this.inputAttemptNum();

    this.gameModel = new GameModel(attemptNum, cars);
  }

  /**
   * 사용자에게 자동차 이름을 입력 받아 CarModel 배열을 생성하여 반환
   * @returns {CarModel[]} CarModel 배열
   */
  async inputCars() {
    const carNames = await this.inputView.getCarNames();
    return carNames.map((name) => new CarModel(name));
  }

  /**
   * 사용자에게 시도 횟수를 입력 받아 반환
   * @returns {number} 시도 횟수(number)
   */
  async inputAttemptNum() {
    const attemptNum = await this.inputView.getAttemptNum();
    return attemptNum;
  }
}

export default GameController;
