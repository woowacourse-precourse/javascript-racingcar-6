import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './utils/constants.js';

class App {
  async play() {
    await this.setupGame();
  }

  async setupGame() {
    const racingCarNames = await Console.readLineAsync(MESSAGES.INPUT_NAMES);
  }
}

export default App;
