import { Random, Console } from '@woowacourse/mission-utils';
import {
  QUERY_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
  CAR_NAME_LENGTH,
  RANDOM_RANGE,
  THRESHOLD,
  MOVE,
  MINIMUM_TRIES,
} from './constants.js';

export default class RacingCarService {
  async racingCarQuery() {
    const RACING_CAR_NAME_QUERY_INPUT = await Console.readLineAsync(
      QUERY_MESSAGE.carName
    );
    this.validateRacingCarNameQueryInput(
      RACING_CAR_NAME_QUERY_INPUT.split(',')
    );
    const RACING_CAR_TRY_QUERY_INPUT = await Console.readLineAsync(
      QUERY_MESSAGE.try
    );
    this.validateRacingCarTryQueryInput(RACING_CAR_TRY_QUERY_INPUT);
    this.play(
      RACING_CAR_NAME_QUERY_INPUT.split(','),
      RACING_CAR_TRY_QUERY_INPUT
    );
  }

  validateRacingCarNameQueryInput(cars) {
    cars.forEach((car) => {
      if (
        car.length > CAR_NAME_LENGTH.max ||
        car.length < CAR_NAME_LENGTH.min
      ) {
        throw new Error(ERROR_MESSAGE.length);
      }
    });
    cars.forEach((car, index) => {
      if (cars.indexOf(car) !== index) {
        throw new Error(ERROR_MESSAGE.unique);
      }
    });
  }

  validateRacingCarTryQueryInput(tries) {
    if (Number.isNaN(+tries)) {
      throw new Error(ERROR_MESSAGE.nan);
    }
    if (+tries < MINIMUM_TRIES) {
      throw new Error(ERROR_MESSAGE.range);
    }
  }

  play(cars, tries) {
    Console.print(RESULT_MESSAGE.intro);
    const result = cars.reduce((acc, car) => {
      acc[car] = '';
      return acc;
    }, {});
    for (let i = 0; i < tries; ++i) {
      cars.forEach((car) => {
        result[car] +=
          Random.pickNumberInRange(RANDOM_RANGE.min, RANDOM_RANGE.max) >=
          THRESHOLD
            ? MOVE
            : '';
        Console.print(`${car} : ${result[car]}`);
      });
      Console.print('');
    }
    this.printResult(result);
  }

  printResult(result) {
    let max = 0;
    for (const [key, value] of Object.entries(result)) {
      max = Math.max(value.length, max);
    }
    const winners = [];
    for (const [key, value] of Object.entries(result)) {
      if (value.length === max) {
        winners.push(key);
      }
    }
    Console.print(RESULT_MESSAGE.winners + `${winners.join(', ')}`);
  }
}
