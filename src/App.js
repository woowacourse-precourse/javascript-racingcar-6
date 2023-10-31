import RacingCarController from './controllers/RacingCarController.js';

class App {
  #racingCarController;

  constructor() {
    this.#racingCarController = new RacingCarController();
  }

  async play() {
    await this.#racingCarController.startGame();
  }
}

export default App;
