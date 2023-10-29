import Refree from './Refree.js';
import Validation from './util/Validation.js';

import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #refree;
  #totalRounds;

  constructor() {
    this.#refree = new Refree();
  }

  async play() {
    await this.#setUpRaceGame();
    this.#playRaceGame();
    this.#findWinner();
  }

  async #setUpRaceGame() {
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

  async #playRaceGame() {
    OutputView.printResultTitleMessage();

    Array.from({ length: this.#totalRounds }).forEach(() => {
      this.#refree.moveCars();
      OutputView.printRoundResult(this.#refree.getRecordResultList());
    });
  }

  async #findWinner() {
    const winner = this.#refree.getWinner();
    OutputView.printWinner(winner);
  }
}

export default App;
