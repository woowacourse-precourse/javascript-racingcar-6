import User from './modules/User.js';
import Game from './modules/Game.js';

class App {

  constructor() {
    this.user = new User();
    this.game = new Game();
  }

  async play() {
    const carNames = await this.user.inputCarNames();
    const count = await this.user.inputGameCount();

    this.game.run({ carNames, count });
  }
}

export default App;
