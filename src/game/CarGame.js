import { Console } from '@woowacourse/mission-utils';
import generateRandomNum from './RandomNum.js';
import { printRace } from '../utils/Output.js';

const initializeCarsPosition = (carNames) => {
  return carNames.reduce((carsPosition, name) => {
    carsPosition[name] = 0;
    return carsPosition;
  }, {});
};

const moveCar = (carNames, carsPosition) => {
  carNames.map((name) => {
    const randomNum = generateRandomNum();
    if (randomNum >= 4) carsPosition[name] += 1;
    printRace(name, carsPosition[name]);
  });
};

const runRace = (carNames, tryCount, carsPosition) => {
  let cnt = 0;

  while (cnt < tryCount) {
    moveCar(carNames, carsPosition);
    cnt++;
    Console.print('');
  }
};

export { initializeCarsPosition, runRace };
