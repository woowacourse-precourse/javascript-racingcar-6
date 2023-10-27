import { Console } from '@woowacourse/mission-utils';

import Race from './Race.js';
import Car from './Car.js';
import { INPUT_NAME, ERROR } from './constants/constants.js';

class App {
  async getCarNames() {
    const input = await Console.readLineAsync(INPUT_NAME);
    const carNames = input.split(',').map((name) => name.trim());
    this.validateCarName(carNames);

    return carNames;
  }

  validateCarName(names) {
    if (names.length < 2) {
      throw new Error(ERROR.invalidNumberOfNames);
    }

    names.forEach((carName) => {
      if (carName.length < 1 || carName.length > 5) {
        throw new Error(ERROR.invalidNameLength);
      }
    });

    const nameSet = new Set(names);
    if (nameSet.size !== names.length) {
      throw new Error(ERROR.nameDuplicated);
    }
  }

  async play() {
    const carNames = await this.getCarNames();
  }
}

export default App;
