import { Console } from '@woowacourse/mission-utils';

export default class Util {
  static readLineAsyncConsole(message) {
    return Console.readLineAsync(message);
  }

  static printConsole(message) {
    return Console.print(message);
  }
}
