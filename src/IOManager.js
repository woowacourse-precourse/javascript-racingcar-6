import { Console } from '@woowacourse/mission-utils';

class IOManager {
  static async input(message) {
    return await Console.readLineAsync(message);
  }
}

export default IOManager;
