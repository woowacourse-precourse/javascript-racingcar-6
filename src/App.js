import RacingGame from './RacingGame.js';

class App {
  async play() {
    const game = new RacingGame();
    await game.startGame();
  }
}

export default App;
