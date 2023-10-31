import CarRacingGamesControllers from "./controllers/CarRacingGameController.js";

class App {
  async play() {
    const gameController = new CarRacingGamesControllers();
    gameController.play();
  }
}

export default App;
