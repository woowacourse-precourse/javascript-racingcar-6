import RacingCarGame from './RacingCarGame.js';

class App {
  async play() {
    const game = new RacingCarGame();
    await game.init();
    game.result();
  }
}

export default App;
