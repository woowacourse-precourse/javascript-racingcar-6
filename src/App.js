import { Console } from '@woowacourse/mission-utils';

import Race from './Race.js';
import Car from './Car.js';
import { INPUT_NAME, ERROR, INPUT_COUNT } from './constants/constants.js';
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

  async getGameCount() {
    const input = await Console.readLineAsync(INPUT_COUNT);
    const count = Number(input);
    this.validateGameCount(count);

    return count;
  }

  validateGameCount(count) {
    if (count < 1) {
      throw new Error(ERROR.invalidCountRange);
    }

    const NumberRegExp = /^[0-9]+$/;
    if (!NumberRegExp.test(count)) {
      throw new Error(ERROR.invalidCountType);
    }
  }

  async play() {
    const carNames = await this.getCarNames();
    const gameCount = await this.getGameCount();

    const cars = carNames.map((name) => new Car(name));
  }
}

export default App;
