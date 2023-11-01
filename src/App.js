import RacingcarGame from './RacingCarGame.js';

class App {
  async play() {
    const racingcarGame = new RacingcarGame();

    await racingcarGame.start();
  }
}

export default App;
