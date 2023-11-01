import { GUIDE_MESSAGES } from '../constants/messages.js';
import OPTIONS from '../constants/options.js';
import SYMBOLS from '../constants/symbols.js';
import OutputView from '../views/OutputView.js';

class Score {
  #outputView = OutputView;

  /**
   * 자동차 이름을 요소로 가진 단일 배열을, 이름과 점수를 가진 2차원 배열로 변환.
   * @param {string[]} carNames
   * @returns {[string, number][]}
   */
  static getBoard(carNames) {
    return carNames.map(carName => [carName, OPTIONS.defaultPoint]);
  }

  /**
   * 모든 레이스 완료 후 점수를 기준으로 스코어보드 내림차순 정렬
   * @param {[string, number][]} scoreBoard
   * @returns {[string, number][]}
   */
  static sortBoard(scoreBoard) {
    return scoreBoard.sort((first, second) => second[1] - first[1]);
  }

  /**
   * 최종 스코어보드를 출력한다.
   * @param {[string, number][]} scoreBoards
   * @private
   */
  showBoard(scoreBoard) {
    return scoreBoard.forEach(([name, score]) => {
      this.#outputView.print(
        GUIDE_MESSAGES.lapScore(name, SYMBOLS.dash.repeat(score)),
      );
    });
  }
}

export default Score;
