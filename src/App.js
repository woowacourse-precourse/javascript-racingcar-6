import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE, SIZE_LIMITS } from './constants/constants.js';
import {
  isCarListValid,
  isRacingAttemptsValid,
  canMoveForward,
} from './utils/validator.js';

class App {
  constructor() {
    this.carList = [];
    this.attemptTimes = 0;
    this.winner = [];
    this.racingCars = {};
  }

  async play() {
    const answer = await Console.readLineAsync(MESSAGE.ENTER_CAR_NAME);
    this.carList = answer.split(',');

    if (
      isCarListValid(
        this.carList,
        SIZE_LIMITS.MAX_CARLIST_LENGTH,
        SIZE_LIMITS.MIN_CARLIST_LENGTH,
        SIZE_LIMITS.MAX_CAR_NAME_LENGTH,
      )
    ) {
      const attemptTimes = await Console.readLineAsync(
        MESSAGE.ENTER_NUMBER_TO_ATTEMPT,
      );
      this.attemptTimes = attemptTimes;
      if (isRacingAttemptsValid(this.attemptTimes)) {
        return this.StartRacing();
      }
      throw new Error(MESSAGE.NOT_VALID_NUMBER);
    }
    throw new Error(MESSAGE.NOT_VALID_CARS_NAME);
  }

  StartRacing() {
    let count = 0;

    this.racingCars = this.carList.reduce((acc, cur) => {
      acc[cur] = '';
      return acc;
    }, {});

    Console.print(MESSAGE.EXECUTION_RESULT);

    while (count < this.attemptTimes) {
      this.carList.map(car => {
        if (canMoveForward()) {
          this.racingCars[car] += '-';
        }
        return Console.print(`${car} : ${this.racingCars[car]}`);
      });
      Console.print('\n');
      count += 1;
    }

    this.WhoIsWinner();
  }

  WhoIsWinner() {
    const scores = Object.values(this.racingCars);
    const cars = Object.keys(this.racingCars);

    let maxNumber = 0;
    let winner = '';

    scores.forEach((score, index) => {
      if (score.length > maxNumber) {
        winner = cars[index];
        maxNumber = score.length;
      } else if (score.length === maxNumber) {
        winner += `,${cars[index]}`;
      }
    });

    Console.print(`${MESSAGE.WINNER} ${winner}`);
  }
}

export default App;
