import assessWinner from './utils/assessWinner.js';

export default class Winner {
  #winners;

  setWinners(cars) {
    this.#winners = assessWinner(cars);
  }

  getWinner() {
    return this.#winners;
  }
}
