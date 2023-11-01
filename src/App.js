import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './utils/constants.js';
import { validateUniqueNames, validateName } from './utils/validation.js';

class App {
  async play() {
    await this.setupGame();
  }

  async setupGame() {
    const racingCarNames = await Console.readLineAsync(MESSAGES.INPUT_NAMES);

    const names = racingCarNames.split(',');
    validateUniqueNames(names);

    names.forEach((name) => {
      validateName(name);
    });
  }
}

export default App;
