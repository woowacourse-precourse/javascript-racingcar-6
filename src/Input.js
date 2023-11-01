import { Console } from '@woowacourse/mission-utils';

class Input {
  async readLine(query, { validator }) {
    try {
      const input = await Console.readLineAsync(query);

      if (typeof validator === 'function') {
        validator(input);
      }

      return input;
    } catch (error) {
      throw error;
    }
  }
}

export default Input;
