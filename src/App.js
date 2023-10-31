import { Random, Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, OUTPUT_MESSAGES } from './Constants.js';
import {
  checkNullValidation,
  checkCarNameLengthValidation,
  checkCarNameDuplicateValidation,
  checkCountTypeValidation,
  checkCountRangeValidation,
} from './utils/validation.js';
import Car from './Car.js';

class App {
  getRacingCarNameInput = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGES.carName);

    checkNullValidation(input);

    const carNames = input.split(',').map((el) => {
      checkCarNameLengthValidation(el);
      return el;
    });

    checkCarNameDuplicateValidation(carNames);

    return carNames.map((el) => new Car(el));
  };

  getRacingCountInput = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGES.gameCount);

    checkNullValidation(input);
    checkCountTypeValidation(input);
    checkCountRangeValidation(input);

    return input;
  };

  calculateFinalWinner = (cars) => {
    const maxStep = Math.max(...cars.map((el) => el.step));

    return cars.filter((el) => el.step === maxStep);
  };

  printAllRacingResult = (cars, count) => {
    Console.print(OUTPUT_MESSAGES.result);

    Array.from({ length: count }).forEach(() => {
      this.printOneRacingResult(cars);
    });
  };

  printOneRacingResult = (cars) => {
    cars.forEach((car) => {
      car.makeStepForwardOrStop();
      Console.print(car.name + ' : ' + '-'.repeat(car.step));
    });
  };

  printFinalWinner = (winners) => {
    Console.print(
      '최종 우승자 : ' + winners.map((winner) => winner.name).join()
    );
  };

  async play() {
    try {
      const cars = await this.getRacingCarNameInput();
      const count = await this.getRacingCountInput();

      this.printAllRacingResult(cars, count);

      const winners = this.calculateFinalWinner(cars);
      this.printFinalWinner(winners);
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;
