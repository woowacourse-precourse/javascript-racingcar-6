import { Console } from '@woowacourse/mission-utils';
import generateRandomNum from './RandomNum.js';
import { printRace } from '../utils/Output.js';

// 자동차 위치 초기화 객체
const initializeCarsPosition = (carNames) => {
  return carNames.reduce((carsPosition, name) => {
    carsPosition[name] = 0;
    return carsPosition;
  }, {});
};

// 무작위 수 조건에 따라 전진
const moveCar = (carNames, carsPosition) => {
  carNames.map((name) => {
    const randomNum = generateRandomNum();
    if (randomNum >= 4) carsPosition[name] += 1;
    printRace(name, carsPosition[name]);
  });
};

// tryCount 만큼 레이싱
const runRace = (carNames, tryCount, carsPosition) => {
  let cnt = 0;

  while (cnt < tryCount) {
    moveCar(carNames, carsPosition);
    cnt++;
    Console.print('');
  }
};

export { initializeCarsPosition, runRace };
