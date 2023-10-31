import assessWinner from '../utils/assessWinner.js';

export default class Winner {
  #winners;

  constructor() {
    this.#winners = [];
  }

  setWinners(carsName, carsPosition) {
    assessWinner(carsPosition).forEach(winnerIdx => {
      this.#winners.push(carsName[winnerIdx]);
    });
  }

  getWinner() {
    return this.#winners;
  }
}
