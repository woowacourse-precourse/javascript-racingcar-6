import RacingGame from './RacingGame.js';

class App {
  async play() {
    const racingGame = new RacingGame();
    await racingGame.setupGame();
    racingGame.play();
  }
}

export default App;
