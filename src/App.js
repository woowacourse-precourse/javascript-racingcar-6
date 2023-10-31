import RacingGame from './lib/racingGame.js';

class App {
  async play() {
    const racingGame = new RacingGame();
    await racingGame.play();
  }
}

export default App;
