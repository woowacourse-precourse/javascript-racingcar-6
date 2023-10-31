/* eslint-disable import/extensions */
import Settings from './Settings.js';
import Game from './Game.js';

class App {
  constructor() {
    this.settings = '';
  }

  async play() {
    this.settings = new Settings();
    this.game = new Game();
    await this.game.racing();
  }
}

export default App;
