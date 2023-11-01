import { Console, Random } from '@woowacourse/mission-utils';

export default class Util {
  static readLineAsyncConsole(message) {
    return Console.readLineAsync(message);
  }

  static printConsole(message) {
    return Console.print(message);
  }

  static RandomNumber(min, max) {
    return Random.pickNumberInRange(min, max);
  }

  static DeepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}
