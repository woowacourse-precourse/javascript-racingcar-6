import { GUIDE_MESSAGE, SETTINGS, SYMBOLS } from '../constants/index.js';
import OutputView from '../views/OutPutView.js';

class Distance {
  #outputView = OutputView;
  /**
   *
   * @param {자동차 이름 배열} carNames
   * @returns
   */
  static setGameBoard(carNames) {
    return carNames.map((carName) => [carName, SETTINGS.defaultPoint]);
  }

  showBoard(distanceBoard) {
    distanceBoard.forEach(([name, distance]) => {
      this.#outputView.print(GUIDE_MESSAGE.lapScore(name, SYMBOLS.dash.repeat(distance)));
    });
  }

  sortBoard(distanceBoard) {
    return distanceBoard.sort((first, second) => second[1] - first[1]);
  }
}

export default Distance;
