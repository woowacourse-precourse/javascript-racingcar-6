import { Console } from '@woowacourse/mission-utils';

class RaceManager {
  static async getNumberOfAttempt() {
    const input = await Console.readLineAsync('시도 횟수 : ');
    return Number(input);
  }
}

export default RaceManager;
