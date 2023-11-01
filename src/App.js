import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { MESSAGES } from './utils/constants.js';
import { validateUniqueNames, validateName } from './utils/validation.js';

class App {
  constructor() {
    this.cars = [];
    this.trial = 0;
  }

  async play() {
    await this.setupGame();
  }

  async setupGame() {
    const racingCarNames = await Console.readLineAsync(MESSAGES.INPUT_NAMES);

    const names = racingCarNames.split(',');
    validateUniqueNames(names);

    names.forEach((name) => {
      validateName(name);
      this.cars.push(new Car(name));
    });

    const trialNumber = await Console.readLineAsync(MESSAGES.INPUT_TRIAL);
    this.trial = Number(trialNumber);
  }
}

export default App;
