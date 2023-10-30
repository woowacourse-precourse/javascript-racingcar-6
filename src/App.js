import RacingGameController from './controller/RacingGameController.js';

class App {
  #racingGameController = new RacingGameController();

  async play() {
    await this.#racingGameController.run();
  }
}

export default App;
