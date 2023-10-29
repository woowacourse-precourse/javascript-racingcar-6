/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import Settings from './Settings.js';

class App {
  constructor() {
    this.settings = '';
  }

  async play() {
    try {
      this.settings = new Settings();
      await this.settings.inputCarName();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
