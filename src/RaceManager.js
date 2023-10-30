import { Console, Random } from '@woowacourse/mission-utils';
import { validateAttempts } from './functions/validate.js';
import { MAX_RANGE, MIN_RANGE } from './constants/randomNumberConstants.js';
import { INPUT_ATTEMPTS } from './constants/messagesConstants.js';

class RaceManager {
  static async getNumberOfAttempts() {
    const input = await Console.readLineAsync(INPUT_ATTEMPTS);
    validateAttempts(input);
    return Number(input);
  }

  static generateRandomNumber() {
    return Random.pickNumberInRange(MIN_RANGE, MAX_RANGE);
  }
}

export default RaceManager;
