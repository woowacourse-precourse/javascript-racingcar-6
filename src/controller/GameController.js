import { GUIDE_MESSAGES } from '../constants/messages.js';
import Score from '../models/Score.js';
import Race from '../models/Race.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class GameController {
  #outputView;

  #inputView;

  #race;

  /**
   * GameController 인스턴스 생성
   * @param {{[x: string]: number}} scoreBoard 스코어보드
   * @param {number} laps 시도할 횟수
   */
  constructor(scoreBoard, laps) {
    this.#race = new Race();
    this.#outputView = OutputView;
    this.#inputView = InputView;
    this.scoreBoard = scoreBoard;
    this.laps = laps;
  }

  /**
   * 경주할 자동차 이름과 시도할 횟수를 입력받아 레이싱을 준비한다.
   */
  async ready() {
    this.scoreBoard = Score.board(await this.#inputView.getCarNames());
    this.laps = await this.#inputView.getLaps();

    await this.#start();
  }

  /**
   * 입력받은 자동차 이름과 횟수를 기반으로 레이스를 시작한다.
   * @private
   */
  async #start() {
    const { result } = GUIDE_MESSAGES;

    this.#outputView.print(result);
    this.score = this.#race.racing(this.scoreBoard, this.laps);
    this.#outputView.print(this.score);
  }
}

export default GameController;
