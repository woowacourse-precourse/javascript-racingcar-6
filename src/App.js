import RacingCarController from "./RacingCarController.js";

class App {
  constructor() {
    this.game = new RacingCarController();
  }

  async play() {
    await this.game.start();
  }
}

export default App;
