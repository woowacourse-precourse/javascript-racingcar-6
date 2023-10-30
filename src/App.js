import racingController from './controller/index.js';

class App {
  #controller;

  constructor() {
    this.#controller = new racingController();
  }

  async play() {
    await this.#controller.startGame();
  }
}

export default App;
