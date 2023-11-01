import OutputView from '../views/OutPutView.js';

class Distance {
  #outputView = OutputView;
  /**
   *
   * @param {자동차 이름 배열} carNames
   * @returns
   */
  static setGameBoard(carNames) {
    return carNames.map((carName) => [carName, 0]);
  }

  showBoard(distanceBoard) {
    distanceBoard.forEach(([name, distance]) => {
      this.#outputView.print(`${name} : ${'-'.repeat(distance)}`);
    });
  }

  sortBoard(distanceBoard) {
    return distanceBoard.sort((first, second) => second[1] - first[1]);
  }
}

export default Distance;
