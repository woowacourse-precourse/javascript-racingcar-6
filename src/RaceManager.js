import { Console, Random } from '@woowacourse/mission-utils';
import { validateAttempts } from './functions/validate.js';
import { MAX_RANGE, MIN_RANGE } from './constants/randomNumberConstants.js';

class RaceManager {
  static async getNumberOfAttempts() {
    const input = await Console.readLineAsync('시도 횟수 : ');
    validateAttempts(input);
    return Number(input);
  }

  static generateRandomNumber() {
    return Random.pickNumberInRange(MIN_RANGE, MAX_RANGE);
  }
}

export default RaceManager;
