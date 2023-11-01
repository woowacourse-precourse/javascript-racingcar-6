import RacingCarGame from './game/RacingCarGame.js';

class App {
  async play() {
    const racingCarGame = new RacingCarGame();
    await racingCarGame.gameStart();
  }
}

export default App;