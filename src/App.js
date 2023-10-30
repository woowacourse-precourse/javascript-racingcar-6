/* eslint-disable import/extensions */
import Settings from './Settings.js';

class App {
  constructor() {
    this.settings = '';
  }

  async play() {
    this.settings = new Settings();
    await this.settings.inputCarName();
    await this.settings.inputTry();
  }
}

export default App;
