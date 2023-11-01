import GameController from "./controller/gameController.js";

class App {
  async play() {
    const gameController = new GameController();
    await gameController.runGame();
  }
}

export default App;
