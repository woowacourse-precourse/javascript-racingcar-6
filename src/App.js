import { Console } from '@woowacourse/mission-utils';
import {
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  SPLIT_LETTER,
  RESULT_LETTER,
} from './constants/Constants.js';
import {
  validateInputEmpty,
  validateCarNameUnique,
  validateCarNameLength,
  validateGameCountType,
  validateGameCountRange,
} from './utils/validation.js';
import Car from './Car.js';

class App {
  getRacingCarNames = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGES.carName);

    validateInputEmpty(input);

    const carNames = input.split(SPLIT_LETTER).map((carName) => {
      validateCarNameLength(carName);
      return carName;
    });

    validateCarNameUnique(carNames);

    return carNames.map((carName) => new Car(carName));
  };

  getRacingGameCount = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGES.gameCount);

    validateInputEmpty(input);
    validateGameCountType(input);
    validateGameCountRange(input);

    return input;
  };

  calculateFinalWinner = (cars) => {
    const maxStep = Math.max(...cars.map((car) => car.step));
    return cars.filter((car) => car.step === maxStep);
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
      Console.print(`${car.name} : ${RESULT_LETTER.repeat(car.step)}`);
    });
  };

  printFinalWinner = (winners) => {
    Console.print(
      `${OUTPUT_MESSAGES.winner} : ${winners
        .map((winner) => winner.name)
        .join()}`
    );
  };

  async play() {
    try {
      const cars = await this.getRacingCarNames();
      const count = await this.getRacingGameCount();

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
