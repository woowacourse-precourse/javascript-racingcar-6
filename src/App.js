import RacingCarController from "./controller/RacingCarController.js";
class App {
  #racingCarGame;

  constructor() {
    this.#racingCarGame = new RacingCarController();
  }

  async play() {
    await this.#racingCarGame.playGame();
  }
}

export default App;
