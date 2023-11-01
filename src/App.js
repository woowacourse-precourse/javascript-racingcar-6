import RaceGameController from "./controllers/raceGameController.js";

class App {
  /** @type {object} */
  #raceGameController;

  async play() {
    this.#raceGameController = new RaceGameController();
    this.#raceGameController.run();
  }
}

export default App;
