import { MissionUtils, Console } from '@woowacourse/mission-utils';
import { DEFAULT, LOG } from './constants/index.js';
import Validation from './Validation.js';

class RacingCarGame {
  car = [''];
  score = [''];
  round = 0;

  async init() {
    const validation = new Validation();

    const inputCar = await Console.readLineAsync(LOG.INPUT_CAR);
    this.car = validation.validateCar(inputCar);
    this.score = Array(this.car.length).fill('');

    const inputRound = await Console.readLineAsync(LOG.INPUT_ROUND);
    this.round = validation.validateRound(inputRound);
  }

  result() {
    Console.print(LOG.RUN);

    for (let i = 0; i < this.round; i++) {
      this.race();
    }

    Console.print(LOG.WINNER + this.winner());
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
