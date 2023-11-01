import RacingGame from './RacingGame.js';

class App {
  async play() {
    const racingGame = new RacingGame();
    await racingGame.run();
  }
}

export default App;
