import GameController from "./controller/GameController.js";

class App {
  constructor() {
    this.gameController = new GameController();
  }

  async play() {
    await this.gameController.start();
  }
}

export default App;