import { Console } from '@woowacourse/mission-utils';
import { InGameMessages, ErrorMessages } from './Constants.js';

class Input {
  static async readCarString() {
    const input = await Console.readLineAsync(InGameMessages.PRINT_INPUT_CARS);
    const splittedString = input.split(',');
    Input.checkCarInput(splittedString);
    return splittedString;
  }

  static checkCarInput(input) {
    const set = new Set();

    input.forEach((str) => {
      if (str.length > 5) throw new Error(ErrorMessages.ERROR_TOO_LONG_NAME);
      set.add(str);
    });

    if (set.size !== input.length)
      throw new Error(ErrorMessages.ERROR_SAME_NAME_EXIST);
  }

  static async readAttemptString() {
    const input = await Console.readLineAsync(
      InGameMessages.PRINT_INPUT_ATTEMPT,
    );
    return Input.checkAttemptInput(input);
  }

  static checkAttemptInput(input) {
    const parsedResult = parseInt(input, 10);
    if (Number.isNaN(parsedResult))
      throw new Error(ErrorMessages.ERROR_NOT_A_NUMBER);
    return parsedResult;
  }
}

export default Input;
