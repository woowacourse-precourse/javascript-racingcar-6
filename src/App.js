import RacingManager from "./RacingManager.js";

class App {
  constructor() {
    this.racingManager = new RacingManager();
  }

  async play() {
    await this.racingManager.gameStart();

    this.racingManager.carStatus();
  }
}

export default App;
