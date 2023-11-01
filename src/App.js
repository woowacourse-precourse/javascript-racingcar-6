import RacingCarGame from './RacingCarGame.js';

class App {
  async play() {
    const game = new RacingCarGame();
    game.result();
  }
}

export default App;
