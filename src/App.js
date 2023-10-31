import CarRacingGameController from './controller/CarRacingGameController.js';

class App {
  #gameController;

  constructor() {
    this.#gameController = new CarRacingGameController();
  }

  async play() {
    await this.#gameController.initGame();
    this.#gameController.startGame();
  }
}

export default App;
