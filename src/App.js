import { Random, Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import {
  MESSAGES,
  RANDOM_NUMBER_RANGE,
  MINIMUM_MOVE_NUMBER,
} from './utils/constants.js';
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
    this.runCarRaceGame();
    this.selectWinner();
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

  runCarRaceGame() {
    Array.from({ length: this.trial }).forEach(() => {
      this.cars.forEach((car) => {
        this.tryMoveCar(car.name);
      });
      this.printCarStatus();
    });
  }

  tryMoveCar(carName) {
    const randomNumber = Random.pickNumberInRange(...RANDOM_NUMBER_RANGE);
    const car = this.cars.find((car) => car.name === carName);

    if (randomNumber >= MINIMUM_MOVE_NUMBER && car) {
      car.updateRacingStatus();
    }
  }

  printCarStatus() {
    this.cars.forEach((car) => {
      const { name, racing } = car;
      Console.print(`${name} : ${racing}`);
    });
    Console.print('');
  }

  selectWinner() {
    const maxRacingLength = Math.max(
      ...this.cars.map((car) => car.getRacingLength())
    );

    const winners = this.cars
      .filter((car) => car.getRacingLength() === maxRacingLength)
      .map((user) => user.name)
      .join(', ');

    Console.print(`${MESSAGES.WINNER} : ${winners}`);
  }
}

export default App;
