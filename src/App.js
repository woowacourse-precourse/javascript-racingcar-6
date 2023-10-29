import { Console } from '@woowacourse/mission-utils';
import strings from './constants.js';

class App {
  async play() {
    const inputName = await Console.readLineAsync(strings.ASK_NAME);
    Console.print(inputName);

    return this.null;
  }
}

export default App;
