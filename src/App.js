import Refree from './Refree.js';

import InputView from './view/InputView.js';

class App {
  #refree;

  constructor() {
    this.#refree = new Refree();
  }

  async play() {
    const carNames = await InputView.getCarNames();
    this.#refree.registerCars(carNames);
  }
}

export default App;
