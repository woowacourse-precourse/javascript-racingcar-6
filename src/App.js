/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
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
