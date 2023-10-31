import CarRacingGamesControllers from "./controllers/CarRacingGameController.js";

class App {
  constructor() {}

  async play() {
    this.gameController = new CarRacingGamesControllers();
    await this.gameController.play();
  }
}

export default App;
