import randomNumberGenerator from '../utils/randomNumberGenerator.js';
import OutputView from '../views/OutputView.js';
import { GUIDE_MESSAGES } from '../constants/messages.js';
import OPTIONS from '../constants/options.js';

class Race {
  #outputView;

  #booster;

  #gas;

  constructor() {
    this.#outputView = OutputView;
  }

  /**
   * 주어진 조건에 따라 레이싱을 진행한다.
   * TODO: scoreBoard의 type 변경
   * @param {{[x: string]: number}} scoreBoard
   * @param {number} laps
   * @returns {[string, number][]}
   */
  racing(scoreBoard, laps) {
    const { whiteSpace } = GUIDE_MESSAGES;
    const scoreBoards = Object.entries(scoreBoard);

    while (laps) {
      this.#drive(scoreBoards);
      this.#outputView.print(whiteSpace);
      laps--;
    }

    return scoreBoards.sort((a, b) => b[1] - a[1]);
  }

  #drive(scoreBoards) {
    scoreBoards.forEach(scoreBoard => {
      this.#gasStation();
      this.#getBooster();
      if (this.#booster) scoreBoard += OPTIONS.point;
    });
    this.#showScoreBoard(scoreBoards);
  }

  /**
   * 무작위 가스 값을 설정한다.
   * @private
   */
  #gasStation() {
    this.#gas = randomNumberGenerator();
  }

  /**
   * 가스가 일정 값 이상일 때 부스터 활성 여부를 설정한다.
   * @private
   */
  #getBooster() {
    const { refuel } = OPTIONS;
    this.#booster = this.#gas >= refuel;
  }

  /**
   * 모든 레이싱 완료 후 스코어보드를 출력한다.
   * @param {[string, number][]} scoreBoards
   * @private
   */
  #showScoreBoard(scoreBoards) {
    const { lapScore, dash } = GUIDE_MESSAGES;
    scoreBoards.forEach(score => {
      this.#outputView.print(lapScore(score[0], dash.repeat(score[1])));
    });
  }
}

export default Race;
