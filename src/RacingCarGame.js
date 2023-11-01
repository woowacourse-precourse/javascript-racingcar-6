import { MissionUtils, Console } from '@woowacourse/mission-utils';
import { DEFAULT, ERROR, LOG } from './constants/index.js';
import Validation from './Validation.js';

class RacingCarGame {
  car = [''];
  round = 0;
  score = [''];

  constructor() {
    this.car = this.input(LOG.INPUT_CAR);
    this.round = this.input(LOG.INPUT_ROUND);
    this.score = Array(this.car.length).fill('');
  }

  result() {
    Console.print(LOG.RUN);

    for (let i = 0; i < this.round; i++) {
      this.race();
    }

    Console.print(LOG.WINNER + this.winner());
  }

  async input(log) {
    const validation = new Validation();
    const readLine = await Console.readLineAsync(log);

    switch (log) {
      case LOG.INPUT_CAR:
        const inputCar =
          typeof readLine === 'string' ? readLine.trim().split(',') : [''];
        validation.validateCar(inputCar);
        return inputCar;

      case LOG.INPUT_ROUND:
        const inputRound = typeof readLine === 'string' ? readLine.trim() : '';
        validation.validateRound(inputRound);
        return Number(inputRound);

      default:
        throw new Error(ERROR.NOT_CAR_OR_ROUND);
    }
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

      Console.print(`${value} : ${this.score[index]}`);
    });

    Console.print('\n');
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

export default RacingCarGame;
