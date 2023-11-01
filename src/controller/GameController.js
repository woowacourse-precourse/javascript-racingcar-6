import { GUIDE_MESSAGES } from '../constants/messages.js';
import Score from '../models/Score.js';
import Race from '../models/Race.js';
import Awards from '../models/Awards.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class GameController {
  #outputView = OutputView;

  #inputView = new InputView();

  #race = new Race();

  #awards = new Awards();

  #winners;

  /**
   * GameController 인스턴스 생성
   * @param {[string, number][]} scoreBoard 스코어보드
   * @param {number} laps 시도할 횟수
   */
  constructor(scoreBoard, laps) {
    this.scoreBoard = scoreBoard;
    this.laps = laps;
  }

  /**
   * 경주할 자동차 이름과 시도할 횟수를 입력받아 레이싱을 준비한다.
   */
  async ready() {
    this.scoreBoard = Score.getBoard(await this.#inputView.getCarNames());
    this.laps = await this.#inputView.getLaps();
    this.#startRace();
  }

  /**
   * 입력받은 자동차 이름과 횟수를 기반으로 레이스를 시작한다.
   * @private
   */
  #startRace() {
    this.#outputView.print(GUIDE_MESSAGES.output);
    this.scoreBoard = this.#race.racing(this.scoreBoard, this.laps);
    this.#endRace();
  }

  /**
   * 실행 결과 최종 우승자를 도출한다.
   * @private
   */
  #endRace() {
    this.#winners = this.#awards.getWinners(this.scoreBoard);
    this.#outputView.print(GUIDE_MESSAGES.finalWinners(this.#winners));
  }
}

export default GameController;
