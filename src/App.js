import CarRacingGameController from "./controllers/CarRacingGameController";

class App {
  constructor() {}

  async play() {
    this.gameController = new CarRacingGameController();
    await this.gameController.prepareSettings();
    this.gameController.executeForward();
    this.gameController.outputFinalResult();
  }
}

export default App;
