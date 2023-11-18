import InputController from './InputController.js';
import { OutputView } from '../view/index.js';

class Game {
  #state = {
    totalRound: 0,
    currentRound: 0,
    carArray: [],
  };
  /**
   *
   * @param {"totalRound"|"currentRound"|"carArray"} key
   * @param {*} value
   */
  #setState(key, value) {
    this.#state = {
      ...this.#state,
      [key]: value,
    };
  }
  async #setCarArray() {
    const carArray = await InputController.getCarArray();
    this.#setState('carArray', carArray);
  }

  async #setTotalRound() {
    const round = await InputController.getRound();
    this.#setState('totalRound', round);
  }

  async start() {
    await this.#setCarArray();
    await this.#setTotalRound();
  }
  #printPlayResult() {
    this.#state.carArray.forEach((c) => OutputView.printPlayResult(c));
    OutputView.printMessage('');
  }

  #updatedCarArrayByMovement() {
    const updatedCarArray = this.#state.carArray.map((c) => {
      c.handleMovement();
      return c;
    });
    this.#setState('carArray', updatedCarArray);
  }

  #updateCurrentRound() {
    const newCurrentRound = this.#state.currentRound + 1;
    this.#setState('currentRound', newCurrentRound);
  }

  play() {
    while (this.#state.currentRound < this.#state.totalRound) {
      this.#updateCurrentRound();
      this.#updatedCarArrayByMovement();
      this.#printPlayResult();
    }
  }
  getCarArray() {
    return this.#state.carArray;
  }
}

export default Game;
