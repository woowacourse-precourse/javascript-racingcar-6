import assessWinner from '../utils/assessWinner.js';

export default class Winner {
  #winners;

  constructor() {
    this.#winners = [];
  }

  setWinners(cars) {
    this.#winners = assessWinner(cars);
  }

  getWinner() {
    return this.#winners;
  }
}
