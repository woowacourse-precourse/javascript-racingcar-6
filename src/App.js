import CarRacingGameController from './controller/CarRacingGameController';

class App {
  #gameController;

  constructor() {
    this.#gameController = new CarRacingGameController();
  }

  async play() {
    await this.#gameController.startGame();
  }
}

export default App;
