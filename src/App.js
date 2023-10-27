import RacingCarGameController from './controller/RacingCarGameController';

class App {
  #racingGameController = new RacingCarGameController();

  async play() {
    await this.#racingGameController.run();
  }
}

export default App;
