import RacingManager from "./RacingManager.js";

class App {
  constructor() {
    this.racingManager = new RacingManager();
  }

  async play() {
    await this.racingManager.gameStart();

    if (this.racingManager.check) {
      await this.racingManager.carStatus();
      this.racingManager.whoWinner();
    }
  }
}

export default App;
