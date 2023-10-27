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
    const carNames = await InputView.getCarNames();

    this.#refree.registerCars(carNames);

    this.#totalRounds = await InputView.getTotalRounds();

    OutputView.printResultTitleMessage();
  }
}

export default App;
