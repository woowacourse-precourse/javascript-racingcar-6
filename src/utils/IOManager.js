import { Console } from '@woowacourse/mission-utils';

class IOManager {
  static async input(message) {
    return await Console.readLineAsync(message);
  }

  static output(message) {
    return Console.print(message);
  }
}

export default IOManager;
