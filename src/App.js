import RacingCarGame from './RacingCarGame.js';

class App {
  constructor() {
    this.game = new RacingCarGame();
  }

  async play() {
    await this.game.start();
  }
}

export default App;
