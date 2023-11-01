import RacingcarController from "./controller/RacingcarController.js";

class App {
  constructor() {
    this.racingcarController = new RacingcarController();
  }
  async play() {
    await this.racingcarController.racingStart();
  }
}

export default App;
