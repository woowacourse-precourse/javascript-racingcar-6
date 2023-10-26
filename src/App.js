import RacingCarGame from './RacingCarGame.js';

class App {
  #racingGame;

  constructor() {
    this.#racingGame = new RacingCarGame();
  }

  async play() {
    await this.#racingGame.startGame();
  }
}

export default App;
