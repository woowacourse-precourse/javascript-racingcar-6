import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';
import NUMBERS from '../constants/numbers.js';
import canMoveForward from './canMoveFoward.js';
import whoIsWinner from './whoIsWinner.js';

const startRacing = (attemptTimes, carList) => {
  let count = 0;

  const racingCars = carList.reduce((acc, cur) => {
    acc[cur] = '';
    return acc;
  }, {});

  Console.print(MESSAGES.EXECUTION_RESULT);

  while (count < attemptTimes) {
    carList.map(car => {
      if (
        canMoveForward(
          NUMBERS.MIN_FOWARD_NUMBER,
          NUMBERS.MIN_RANDOM_NUMBER_RANGE,
          NUMBERS.MAX_RANDOM_NUMBER_RANGE,
        )
      ) {
        racingCars[car] += '-';
      }
      return Console.print(`${car} : ${racingCars[car]}`);
    });
    Console.print('\n');
    count += 1;
  }

  whoIsWinner(racingCars);
};

export default startRacing;
