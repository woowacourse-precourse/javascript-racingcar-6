import { Console } from '@woowacourse/mission-utils';

export default class GameView {
  print(message) {
    Console.print(message);
  }

  async getUserInput(query) {
    return Console.readLineAsync(query);
  }
}
