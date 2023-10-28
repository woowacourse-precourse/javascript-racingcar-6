import { Console } from '@woowacourse/mission-utils';

import Race from './Race.js';
import Car from './Car.js';
import { INPUT_NAME, INPUT_COUNT } from './constants/constants.js';
import { validateCarName, validateGameCount } from './utils/validate.js';

class App {
  async getCarNames() {
    const input = await Console.readLineAsync(INPUT_NAME);
    const carNames = input.split(',').map((name) => name.trim());
    validateCarName(carNames);

    return carNames;
  }

  async getGameCount() {
    const input = await Console.readLineAsync(INPUT_COUNT);
    const count = Number(input);
    validateGameCount(count);

    return count;
  }

  async play() {
    const carNames = await this.getCarNames();
    const gameCount = await this.getGameCount();

    const cars = carNames.map((name) => new Car(name));
    const race = new Race(cars, gameCount);
    race.startRace();
  }
}

export default App;
