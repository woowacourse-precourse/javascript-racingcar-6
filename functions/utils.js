import { showResult, showWinner } from './print.js';

import MissionUtils from './MissionUtils';

export const isForward = (cars) => {
  cars.forEach((car) => {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      car.forwardCount++;
    }
  });
};

export const startGame = (times, cars) => {
  while (times) {
    isForward(cars);
    showResult(cars);
    times--;
  }

  showWinner(whoIsWinner(cars));
};

const getMaxValue = (carArray) => {
  let maxValue = 0;

  carArray.forEach((car) => {
    if (car.forwardCount > maxValue) {
      maxValue = car.forwardCount;
    }
  });

  return maxValue;
};

const whoIsWinner = (cars) => {
  let winner = [];

  let maxValue = getMaxValue(cars);

  cars.forEach((car) => {
    if (car.forwardCount === maxValue) {
      winner.push(car.name);
    }
  });

  return winner;
};

export const resetGame = () => {
  const carsInput = document.getElementById('car-names-input');
  const timesInput = document.getElementById('racing-count-input');

  carsInput.value = '';
  timesInput.value = '';
};