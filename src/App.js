import RacingGame from './RacingGame.js';

class App {
  constructor() {
    this.racingGame = new RacingGame();
  }

  async play() {
    await this.racingGame.start();
  }
}

export default App;
