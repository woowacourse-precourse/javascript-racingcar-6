import { Console, Random } from '@woowacourse/mission-utils';
import MESSAGE from './constants/constants.js';

class App {
  constructor() {
    this.cars = [];
    this.playTimes = 0;
    this.winner = [];
    this.randomNumber = 0;
    this.racingCars = {};
  }

  async play() {
    const answer = await Console.readLineAsync(MESSAGE.ENTER_CAR_NAME);
    this.cars = answer.split(',');

    if (this.IsCarListValid()) {
      const playTimes = await Console.readLineAsync(
        MESSAGE.ENTER_NUMBER_TO_TRY,
      );
      this.playTimes = playTimes;
      if (this.IsRacingAttemptsValid()) {
        return this.StartRacing();
      }
      throw new Error(MESSAGE.NOT_VALID_NUMBER);
    }
    throw new Error(MESSAGE.NOT_VALID_CARS_NAME);
  }

  HasNoSpace(value) {
    return !value.includes(' ');
  }

  IsCarListValid() {
    const maxCarListLength = 10;
    const minCarListLength = 2;
    const maxCarnameLength = 5;

    const isNotEmpty = car => car.length !== 0;
    const checkLength = car => car.length <= maxCarnameLength;

    if (
      this.cars.length > maxCarListLength ||
      this.cars.length < minCarListLength
    ) {
      return false;
    }

    return this.cars.every(
      car => this.HasNoSpace(car) && isNotEmpty(car) && checkLength(car),
    );
  }

  IsRacingAttemptsValid() {
    const checkUnderTen = /^(10|[1-9])$/;

    if (checkUnderTen.test(this.playTimes) && this.HasNoSpace(this.playTimes)) {
      return true;
    }
    return false;
  }

  StartRacing() {
    let count = 0;

    this.racingCars = this.cars.reduce((acc, cur) => {
      acc[cur] = '';
      return acc;
    }, {});

    Console.print(MESSAGE.EXECUTION_RESULT);

    while (count < this.playTimes) {
      this.cars.map(car => {
        if (this.CanMoveForward()) {
          this.racingCars[car] += '-';
        }
        return Console.print(`${car} : ${this.racingCars[car]}`);
      });
      Console.print('\n');
      count += 1;
    }

    this.WhoIsWinner();
  }

  CanMoveForward() {
    this.randomNumber = Random.pickNumberInRange(0, 9);

    if (this.randomNumber >= 4) {
      return true;
    }
    return false;
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
