import Game from './Game.js';

class App {
  async play() {
    this.game = new Game();
    await this.game.run();
  }
}

export default App;
