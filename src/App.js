import { Random, Console } from '@woowacourse/mission-utils';
import {
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  ERRORS,
  COUNTREGEX,
} from './Constants.js';
import Car from './Car.js';

class App {
  checkRacingCarNameValidation = (el) => {
    if (el.length > 5) {
      throw new Error(ERRORS.carName.length);
    }
  };

  getRacingCarNameInput = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGES.carName);

    const carNames = input.split(',').map((el) => {
      this.checkRacingCarNameValidation(el);
      return el;
    });

    return carNames;
  };

  checkRacingCountValidation = (el) => {
    if (!COUNTREGEX.test(el)) {
      throw new Error(ERRORS.gameCount.range);
    }
  };

  getRacingCountInput = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGES.gameCount);

    this.checkRacingCountValidation(input);

    return input;
  };

  calculateFinalWinner = (cars) => {
    const maxStep = Math.max(...cars.map((el) => el.step));

    return cars.filter((el) => el.step === maxStep);
  };

  async play() {
    try {
      const carNames = await this.getRacingCarNameInput();
      const cars = carNames.map((el) => new Car(el));

      const count = await this.getRacingCountInput();

      Console.print(OUTPUT_MESSAGES.result);

      Array.from({ length: count }).forEach(() => {
        cars.forEach((car) => {
          car.makeStepForwardOrStop();
          Console.print(car.name + ' : ' + '-'.repeat(car.step));
        });
      });

      const winners = this.calculateFinalWinner(cars);

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
