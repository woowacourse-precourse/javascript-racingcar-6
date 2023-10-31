import RacingGame from './RacingGame.js';

class App {
  async play() {
    const racingGame = new RacingGame();
    await racingGame.playRacing();
  }
}

export default App;
