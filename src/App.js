import Game from './Game.js';
class App {
  async play() {
    const game = new Game();
    await game.start();
    game.progressGame();
  }
}

export default App;
