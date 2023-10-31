import { Console } from '@woowacourse/mission-utils';

class Interface {
  static requestValueforContent(content) {
    const inputValue = Console.readLineAsync(content);
    return inputValue;
  }

  static printMessage(message) {
    return Console.print(message);
  }
}

export default Interface;
