import CarRaceGameController from "./Controller/CarRaceGameController";

class App {
  #CarRaceGameController;

  constructor() {
    this.#CarRaceGameController = new CarRaceGameController();
  }

  async play() {
    this.#CarRaceGameController.ConsoleName();
  }
}

export default App;
