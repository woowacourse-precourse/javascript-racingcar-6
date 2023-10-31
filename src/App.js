import CarRaceGameController from "./Controller/CarRaceGameController";

class App {
  #CarRaceGameController;

  constructor() {
    this.#CarRaceGameController = new CarRaceGameController();
  }

  async play() {
    await this.#CarRaceGameController.InputRaceCarName();
  }
}

export default App;
