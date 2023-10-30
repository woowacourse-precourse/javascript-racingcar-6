import Game from './game/Game.js';

class App {
  constructor() {
    this.game = new Game();
  }

  async play() {
    await this.game.playGame();
  }
}

export default App;
