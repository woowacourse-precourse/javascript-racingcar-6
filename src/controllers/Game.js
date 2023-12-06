import { InputController } from '../controllers/index.js';
import { OutputView } from '../view/index.js';

class Game {
  /**
   * @type {{round:Round|undefined; carArray:Car[]|undefined}}
   */
  #state = {
    round: undefined,
    carArray: undefined,
  };

  /**
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
    this.#state.carArray = carArray;
  }
  async #setTotalRound() {
    const round = await InputController.getRound();
    this.#state.round = round;
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
    this.#state.round.updateCurrentRound();
  }
  play() {
    while (true) {
      this.#updateCurrentRound();
      this.#updatedCarArrayByMovement();
      this.#printPlayResult();
      //현재 라운드와 이동 횟수 라운드가 같으면 게임 종료
      const { total, current } = this.#state.round.getRound();
      if (current === total) break;
    }
  }
  getCarArray() {
    return this.#state.carArray;
  }
}

export default Game;
