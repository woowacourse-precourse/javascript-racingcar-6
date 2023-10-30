import { Console } from '@woowacourse/mission-utils';
import { InGameMessages, ErrorMessages } from './Constants.js';

class Input {
  static async readCarString() {
    const input = await Console.readLineAsync(InGameMessages.PRINT_INPUT_CARS);
    const splittedString = input.split(',');
    this.checkInput(splittedString);
    return splittedString;
  }

  static checkInput(input) {
    input.map((str) => {
      if (str.length > 5) throw new Error(ErrorMessages.PRINT_TOO_LONG_NAME);
    });
  }
}

export default Input;
