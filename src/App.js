import RacingController from "./controller/RacingController.js";

class App {
  #racingController;

  constructor() {
    this.#racingController = new RacingController();
  }

  async play() {
    await this.#racingController.run();
  }
}

export default App;
