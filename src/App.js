import RacingGame from './RacingGame.js';

class App {
  #racingGame;

  constructor() {
    this.#racingGame = new RacingGame();
  }

  async play() {
    await this.#racingGame.setUpRaceGame();
    await this.#racingGame.playRaceGame();
    await this.#racingGame.findWinner();
  }
}

export default App;
