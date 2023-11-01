import RacingGame from "./racingGame/index.js";

class App {
  constructor() {
    this.game = new RacingGame();
  }
  async play() {
    await this.game.gameStart();
  }
}

export default App;
