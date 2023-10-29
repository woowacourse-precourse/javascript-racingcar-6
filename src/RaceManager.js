import { Console, Random } from '@woowacourse/mission-utils';
import { MIN_RANGE, MAX_RANGE } from './constants/constants.js';
import { validateAttempts } from './functions/validate.js';

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
