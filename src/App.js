import RacingGame from "./racing-game.js";

class App {
  constructor() {
    this.racingGame = new RacingGame();
  }

  async play() {
    await this.racingGame.startGame();
  }
}

export default App;
