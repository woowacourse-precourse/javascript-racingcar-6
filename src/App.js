import CarRacingGamesControllers from "./controllers/CarRacingGameController.js";

class App {
  #gameController;

  constructor() {
    this.#gameController = new CarRacingGamesControllers();
  }

  async play() {
    await this.#gameController.play();
  }
}

export default App;
