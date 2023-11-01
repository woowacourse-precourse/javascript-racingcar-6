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
        const number = Number(readLine.trim());
        this.validateRound(number);
        return number;

      default:
        throw new Error(ERROR.NOT_CAR_OR_ROUND);
    }
  }

  validateCar(cars) {
    if (cars.length < DEFAULT.CARS_MIN_LENGTH) {
      throw new Error(ERROR.NOT_PLURAL);
    }

    cars.forEach((value) => {
      if (
        value.length < DEFAULT.NAME_MIN_LENGTH &&
        value.length > DEFAULT.NAME_MAX_LENGTH
      ) {
        throw new Error(ERROR.NOT_UNDER_LEN);
      }
    });

    const set = new Set(cars);
    if (set.size !== cars.length) throw new Error(ERROR.NOT_UNIQUE);
  }

  validateRound(round) {
    if (isNaN(round)) {
      throw new Error(ERROR.NOT_NUMBER);
    }

    if (round < 0 && !Number.isInteger(round)) {
      throw new Error(ERROR.NOT_INTEGER);
    }
  }

  run() {
    MissionUtils.Console.print(LOG.RUN);

    for (let i = 0; i < this.round; i++) {
      this.race();
    }

    MissionUtils.Console.print(LOG.WINNER + this.winner());
  }

  race() {
    this.car.forEach((value, index) => {
      const number = MissionUtils.Random.pickNumberInRange(
        DEFAULT.MIN_RANGE,
        DEFAULT.MAX_RANGE,
      );

      if (number >= DEFAULT.MOVABLE_MIN) {
        this.score[index] += '-';
      }

      MissionUtils.Console.print(`${value} : ${this.score[index]}`);
    });

    MissionUtils.Console.print('\n');
  }

  winner() {
    const length = this.score.map((value) => value.length);
    const maxLen = Math.max(...length);
    const winners = length.map((value, index) => {
      if (value === maxLen) return this.car[index];
    });

    return winners.filter((value) => value !== undefined).join(', ');
  }
}

export default App;
