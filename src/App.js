import RacingCarGameController from './controller/RacingCarGameController.js';

class App {
  #racingGameController = new RacingCarGameController();

  async play() {
    await this.#racingGameController.run();
  }
}

export default App;
