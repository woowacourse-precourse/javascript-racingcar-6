import RacingGame from "./racingGame/index.js";

class App {
  game;
  constructor() {
    this.game = new RacingGame();
  }
  async play() {

    // const game = new RacingGame();
    await this.game.gameStart();
  }
}

export default App;
