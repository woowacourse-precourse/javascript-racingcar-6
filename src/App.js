import RacingGame from './RacingGame.js';

class App {
  async play() {
    const racingGame = new RacingGame();
    await racingGame.setupInputCarNames();
  }
}

export default App;
