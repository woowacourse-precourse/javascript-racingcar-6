import { Console } from '@woowacourse/mission-utils';
import { message } from './Constants.js';

class App {
  async play() {}

  async getRacecarNameInput() {
    const racecarNameInput = await Console.readLineAsync(message.ASK_RACECAR_NAMES);
  }

  async getAttemptInput() {
    const attemptInput = await Console.readLineAsync(message.ASK_ATTEMPT_NUMBER);
  }
}

export default App;
