import RacingController from "./controller/RacingController.js";

class App {
  #racingController = new RacingController();

  async play() {
    await this.#racingController.run();
  }
}

export default App;
