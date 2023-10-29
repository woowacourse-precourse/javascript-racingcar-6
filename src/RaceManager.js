import { Console, Random } from '@woowacourse/mission-utils';
import { MIN_RANGE, MAX_RANGE } from './constants/constants';

class RaceManager {
  static async getNumberOfAttempt() {
    const input = await Console.readLineAsync('시도 횟수 : ');
    return Number(input);
  }

  static generateRandomNumber() {
    return Random.pickNumberInRange(MIN_RANGE, MAX_RANGE);
  }
}

export default RaceManager;
