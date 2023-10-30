import RacingCarGameManager from './RacingCarGameManager';

class App {
  #game;

  constructor(game = new RacingCarGameManager()) {
    this.#game = game;
  }

  async play() {
    await this.#game.initializeGame();
    this.#game.runGame();
    this.#game.displayResult();
  }
}

export default App;
