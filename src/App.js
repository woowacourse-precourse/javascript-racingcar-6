import Game from './game/Game.js';

class App {
  constructor() {
    this.game = new Game();
  }

  async play() {
    await this.game.startGame();
  }
}

export default App;
