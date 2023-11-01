import { readLineAsync } from '../common/utils.js';
import MESSAGE from '../common/message.js';

class UserInput {
  async inputCarName() {
    const carName = await readLineAsync(MESSAGE.inputCarName);
    return carName;
  }

  async inputAttemptCount() {
    const attemptCount = await readLineAsync(MESSAGE.inputNumber);
    return attemptCount;
  }
}

export default UserInput;
