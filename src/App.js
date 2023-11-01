import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { MESSAGES } from './utils/constants.js';
import {
  validateUniqueNames,
  validateName,
  validateTrialNumber,
} from './utils/validation.js';

class App {
  constructor() {
    this.cars = [];
    this.trial = 0;
  }

  async play() {
    await this.setupGame();
    this.printGameStartMessage();
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
    validateTrialNumber(trialNumber);
    this.trial = Number(trialNumber);
  }

  printGameStartMessage() {
    Console.print(MESSAGES.GAME_START);
  }
}

export default App;
