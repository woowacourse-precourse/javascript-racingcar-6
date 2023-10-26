import RacingManager from "./RacingManager.js";

class App {
  constructor() {
    this.racingManager = new RacingManager();
  }

  async play() {
    this.racingManager.gameStart();
  }
}

export default App;
