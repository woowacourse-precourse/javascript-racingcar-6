import CarRacingGamesControllers from "./controllers/CarRacingGameController.js";

class App {
  constructor() {}

  async play() {
    this.gameController = new CarRacingGamesControllers();
    await this.gameController.prepareSettings();
    this.gameController.executeForward();
    this.gameController.outputFinalResult();
  }
}

export default App;
