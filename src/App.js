import Game from './RacingcarGame/Game.js';

class App {
  async play() {
    const game = new Game();
    await game.run();
  }
}

export default App;
