import randomNumberGenerator from '../utils/randomNumberGenerator.js';
import OutputView from '../views/OutputView.js';
import SYMBOLS from '../constants/symbols.js';
import OPTIONS from '../constants/options.js';
import Score from './Score.js';

class Race {
  #outputView;

  #fuel;

  #score = new Score();

  constructor() {
    this.#outputView = OutputView;
  }

  /**
   * 주어진 조건에 따라 레이싱을 진행한다.
   * @param {[string, number][]} scoreBoard
   * @param {number} laps
   * @returns {[string, number][]}
   */
  racing(scoreBoard, laps) {
    while (laps) {
      this.#drive(scoreBoard);
      this.#outputView.print(SYMBOLS.whiteSpace);
      laps--;
    }

    return this.#score.sortBoard(scoreBoard);
  }

  /**
   * 스코어보드 내 참가자들을 순회하며, 라운드를 진행한다.
   * @param {[string, number][]} scoreBoard
   * @returns
   */
  #drive(scoreBoard) {
    scoreBoard.forEach(score => {
      this.#gasStation();
      this.#getBooster(score);
    });

    return this.#score.showBoard(scoreBoard);
  }

  /**
   * 무작위 연료 값을 설정한다.
   * @private
   */
  #gasStation() {
    this.#fuel = randomNumberGenerator();
  }

  /**
   * 연료가 일정 값 (OPTIONS.refuel = 4) 이상이면 부스터(전진 점수)를 얻는다.
   * @private
   */
  #getBooster(score) {
    if (this.#fuel >= OPTIONS.refuel) score[1] += OPTIONS.point;
  }
}

export default Race;
