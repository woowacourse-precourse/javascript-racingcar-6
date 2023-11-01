import { Console } from '@woowacourse/mission-utils';

class Interface {
  /**
   * @param {string} content 
   * @returns {string}
   */
  static requestValueforContent(content) {
    const inputValue = Console.readLineAsync(content);
    return inputValue;
  }

  static printMessage(message) {
    return Console.print(message);
  }
}

export default Interface;
