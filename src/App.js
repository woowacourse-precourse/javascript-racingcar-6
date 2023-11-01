import { RacingCarGame } from './RacingCarGame.js';

class App {
  racingCarGame = new RacingCarGame();

  async play() {
    await this.racingCarGame.start();
  }
}

export default App;
