import { Console } from '@woowacourse/mission-utils';

class ConsoleInput {
  static async input(message) {
    const input = await Console.readLineAsync(message);
    return input;
  }
}

export default ConsoleInput;
