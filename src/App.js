import { Random, Console } from '@woowacourse/mission-utils';
import {
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  ERRORS,
  COUNTREGEX,
} from './Constants.js';
import Car from './Car.js';

class App {
  constructor() {
    this.cars = [];
    this.count = 0;
  }

  checkNullValidation = (el) => {
    if (el === null || el === undefined || el === '') {
      throw new Error(ERRORS.null);
    }
  };

  checkCarNameDuplicateValidation = (el) => {
    if (new Set(el).size !== el.length) {
      throw new Error(ERRORS.carName.duplicate);
    }
  };

  checkCarNameLengthValidation = (el) => {
    if (el.length > 5) {
      throw new Error(ERRORS.carName.length);
    }
  };

  getRacingCarNameInput = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGES.carName);

    this.checkNullValidation(input);

    const carNames = input.split(',').map((el) => {
      this.checkCarNameLengthValidation(el);
      return el;
    });

    this.checkCarNameDuplicateValidation(carNames);

    return carNames.map((el) => new Car(el));
  };

  checkCountTypeValidation = (el) => {
    if (isNaN(el)) {
      throw new Error(ERRORS.gameCount.type);
    }
  };

  checkCountRangeValidation = (el) => {
    if (!COUNTREGEX.test(el)) {
      throw new Error(ERRORS.gameCount.range);
    }
  };

  getRacingCountInput = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGES.gameCount);

    this.checkNullValidation(input);
    this.checkCountTypeValidation(input);
    this.checkCountRangeValidation(input);

    return input;
  };

  calculateFinalWinner = (cars) => {
    const maxStep = Math.max(...cars.map((el) => el.step));

    return cars.filter((el) => el.step === maxStep);
  };

  async play() {
    try {
      this.cars = await this.getRacingCarNameInput();
      this.count = await this.getRacingCountInput();

      Console.print(OUTPUT_MESSAGES.result);

      Array.from({ length: this.count }).forEach(() => {
        this.cars.forEach((car) => {
          car.makeStepForwardOrStop();
          Console.print(car.name + ' : ' + '-'.repeat(car.step));
        });
      });

      const winners = this.calculateFinalWinner(this.cars);

      Console.print(
        '최종 우승자 : ' + winners.map((winner) => winner.name).join()
      );
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;
