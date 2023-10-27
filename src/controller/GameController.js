import Score from '../models/Score.js';
import InputView from '../views/InputView.js';

class GameController {
  /**
   * 레이스에 참가하는 자동차 이름과 점수를 나타내는 스코어보드
   * @types { [key: string]: number }
   */
  #scoreBoard = {};

  #inputView;

  constructor() {
    this.#inputView = InputView;
  }

  async ready() {
    const carNames = await this.#inputView.getCarNames();
    const laps = await this.#inputView.getLaps();
    this.#scoreBoard = Score.board(carNames);
  }
}

export default GameController;
