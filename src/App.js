import User from './domain/User.js';
import Game from './domain/Game.js';

class App {

  constructor() {
    this.user = new User();
    this.game = new Game();
  }

  async play() {
    const { carNames, count } = await this.user.inputForGame();
    this.game.run({ carNames, count });
  }
}

export default App;
