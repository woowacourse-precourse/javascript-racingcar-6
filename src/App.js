import Game from './Game.js';

class App {
  game = new Game();

  async play() {
    await this.game.start();
  }
}

export default App;
