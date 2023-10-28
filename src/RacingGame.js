import Refree from './Refree.js';
import Validation from './util/Validation.js';

import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class RacingGame {
  #refree;
  #totalRounds;

  constructor() {
    this.#refree = new Refree();
  }

  async setUpRaceGame() {
    await this.#readCarNames();
    await this.#readTotalRounds();
  }

  async #readCarNames() {
    const carNameString = await InputView.getCarNames();
    const carNames = carNameString.split(',');
    Validation.validateCarNames(carNames);

    this.#refree.registerCars(carNames);
  }

  async #readTotalRounds() {
    const totalRoundsString = await InputView.getTotalRounds();
    Validation.validateTotalRounds(totalRoundsString);
    this.#totalRounds = Number(totalRoundsString);
  }

  async playRaceGame() {
    OutputView.printResultTitleMessage();

    Array.from({ length: this.#totalRounds }).forEach(() => {
      this.#refree.moveCars();
      OutputView.printResult(this.#refree.getRcordList());
    });
  }

  async findWinner() {
    const winner = this.#refree.getWinner();
    OutputView.printWinner(winner);
  }
}

export default RacingGame;
