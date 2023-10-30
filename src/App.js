import Game from './Game.js';

class App {
  async play() {
    this.game = new Game();
    this.game.run();
  }
}

export default App;
