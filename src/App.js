import GameController from './controller/gameController.js';

class App {
  #gameController;

  constructor() {
    this.#gameController = new GameController();
  }

  async play() {
    await this.#gameController.run();
  }
}

export default App;
