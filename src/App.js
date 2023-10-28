import { Console } from '@woowacourse/mission-utils';
import { message, error } from './Constants.js';

class App {
  async play() {}

  async getRacecarNameInput() {
    const racecarNameInput = await Console.readLineAsync(message.ASK_RACECAR_NAMES);
  }

  async getAttemptInput() {
    const attemptInput = await Console.readLineAsync(message.ASK_ATTEMPT_NUMBER);

    const checkResult = await this.checkAttemptValidity(attemptInput);

    if (checkResult) {
      return Number(attemptInput);
    } else {
      throw new Error(error.NOT_A_NUMBER);
    }
  }

  async checkAttemptValidity(attemptInput) {
    return /^\d+$/.test(attemptInput);
  }
}

export default App;
