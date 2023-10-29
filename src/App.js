import RacingCarGame from './RacingCarGame.js';

class App {
  #game;

  constructor(game = new RacingCarGame()) {
    this.#game = game;
  }

  async play() {
    this.#game.start();
  }
}

export default App;
