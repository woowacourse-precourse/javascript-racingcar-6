import Refree from './Refree.js';

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

    this.#refree.registerCars(carNames);

    this.#totalRounds = await InputView.getTotalRounds();

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
