import { Console } from '@woowacourse/mission-utils';
import ErrorMessage from '../views/ErrorMessage.js';
import PromptMessage from '../views/PromptMessage.js';

class Attempt {
  async getRaceAttempt() {
    const getRaceAttempt = await Console.readLineAsync(
      PromptMessage.ENTER_ATTEMPT,
    );
    this.attemptCount = parseInt(getRaceAttempt, 10);

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(getRaceAttempt) !== false) {
      throw new Error(ErrorMessage.INVALID_INPUT);
    }
  }
}

export default Attempt;
