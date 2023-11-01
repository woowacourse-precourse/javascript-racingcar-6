import { SYMBOLS } from '../constants/index.js';

class Award {
  #winningDistance;

  #winners;

  constructor(winners) {
    this.winners = winners;
  }

  getWinners(distanceBoard) {
    this.#getWinningDistance(distanceBoard);
    this.#setWinner(distanceBoard);

    return this.#winners;
  }

  #getWinningDistance(distanceBoard) {
    const [[, winningPoint]] = distanceBoard;
    this.#winningDistance = winningPoint;
  }

  #setWinner(distanceBoard) {
    this.#winners = distanceBoard
      .filter(([, distance]) => distance === this.#winningDistance)
      .map(([name]) => name)
      .join(SYMBOLS.commaSpace);
  }
}

export default Award;
