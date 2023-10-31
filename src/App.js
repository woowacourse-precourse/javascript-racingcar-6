import { MissionUtils } from '@woowacourse/mission-utils';
import { DEFAULT, LOG, ERROR } from './util/constants.js';

class App {
  car = [''];
  round = 0;
  score = [''];

  async play() {
    this.init();
    this.run();
  }

  init() {
    this.car = this.input(LOG.INPUT_CAR);
    this.round = this.input(LOG.INPUT_ROUND);
    this.score = Array(this.car.length).fill('');
  }

  async input(log) {
    const readLine = await MissionUtils.Console.readLineAsync(log);

    switch (log) {
      case LOG.INPUT_CAR:
        const cars = readLine.trim().split(',');
        this.validateCar(cars);
        return cars;

      case LOG.INPUT_ROUND:
        if (isNaN(readLine)) throw new Error(ERROR.NOT_NUMBER);
        return Number(readLine.trim());

      default:
        throw new Error(ERROR.NOT_CAR_OR_ROUND);
    }
  }

  validateCar(cars) {
    if (cars.length < DEFAULT.CARS_MIN_LENGTH) {
      throw new Error(ERROR.NOT_PLURAL);
    }

    cars.map((value) => {
      if (
        value.length < DEFAULT.NAME_MIN_LENGTH &&
        value.length > DEFAULT.NAME_MAX_LENGTH
      )
        throw new Error(ERROR.NOT_UNDER_LEN);
    });

    const set = new Set(cars);
    if (set.size !== cars.length) throw new Error(ERROR.NOT_UNIQUE);
  }

  run() {
    MissionUtils.Console.print(LOG.RUN);

    for (let i = 0; i < this.round; i++) {
      this.moveOrStop();
    }
  }

  moveOrStop() {
    this.car.map((value, index) => {
      const number = MissionUtils.Random.pickNumberInRange(
        DEFAULT.MIN_RANGE,
        DEFAULT.MAX_RANGE,
      );

      if (number >= DEFAULT.MOVABLE_MIN) {
        this.score[index] += '-';
      }

      this.printPhase(value, index);
    });

    MissionUtils.Console.print('\n');
  }

  printPhase(car, index) {
    MissionUtils.Console.print(`${car} : ${this.score[index]}`);
  }
}

export default App;
