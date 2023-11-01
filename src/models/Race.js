import randomNumberGenerator from '../utils/randomNumberGenerator.js';
import OutputView from '../views/OutputView.js';
import SYMBOLS from '../constants/symbols.js';
import OPTIONS from '../constants/options.js';
import Score from './Score.js';

class Race {
  #fuel = 0;

  #outputView = OutputView;

  #score = new Score();

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

    return Score.sortBoard(scoreBoard);
  }

  /**
   * 스코어보드 내 요소를 순회하며, 라운드를 진행한다.
   * @param {[string, number][]} scoreBoard
   * @returns
   */
  #drive(scoreBoard) {
    scoreBoard.forEach(score => {
      this.#getFuel();
      this.#getPoint(score);
    });

    return this.#score.showBoard(scoreBoard);
  }

  /**
   * `randomNumberGenerator()`를 통해 얻어낸 무작위 수를 할당한다.
   * @private
   */
  #getFuel() {
    this.#fuel = randomNumberGenerator();
  }

  /**
   * 연료가 일정 값 (OPTIONS.refuel = 4) 이상이면 전진하여 점수를 얻는다.
   * @private
   */
  #getPoint(score) {
    if (this.#fuel >= OPTIONS.refuel) score[1] += OPTIONS.point;
  }
}

export default Race;
