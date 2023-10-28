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
    const carNameString = await InputView.getCarNames();
    const carNames = carNameString.split(',');
    Validation.validateCarNames(carNames);

    this.#refree.registerCars(carNames);

    const totalRoundsString = await InputView.getTotalRounds();
    Validation.validateTotalRounds(totalRoundsString);
    this.#totalRounds = Number(totalRoundsString);

    OutputView.printResultTitleMessage();

    Array.from({ length: this.#totalRounds }).forEach(() => {
      this.#refree.moveCars();
      OutputView.printResult(this.#refree.getResultList());
    });
    const winner = this.#refree.getWinner();
    OutputView.printWinner(winner);
  }
}

export default App;
