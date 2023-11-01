import RacingCarGame  from "./RacingCarGame/RacingCarGame.js";

class App {
  #racingcarGame;

  constructor() {
    this.#racingcarGame = new RacingCarGame();
  }

  async play() {
    await this.#racingcarGame.startGame();
  }
}

export default App;