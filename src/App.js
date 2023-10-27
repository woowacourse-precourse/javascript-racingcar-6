import RacingCarController from './controller/index.js';

class App {
  #controller;

  constructor() {
    this.#controller = new RacingCarController();
  }

  async play() {
    this.#controller.startGame();
  }
}

export default App;
