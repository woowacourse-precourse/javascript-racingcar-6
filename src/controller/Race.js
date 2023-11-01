import { Random } from '@woowacourse/mission-utils';
import SETTING from '../constant/Setting.js';
import Car from '../model/Car.js';
import { printResult } from '../view/InputOutput.js';

const createRaceCars = userInput => {
  const names = userInput.split(',');
  const cars = names.map(name => new Car(name));

  return cars;
};

const getRandomNumber = () => {
  return Random.pickNumberInRange(SETTING.MIN_RANGE, SETTING.MAX_RANGE);
};

const checkRandomNumber = randomNumber => {
  return randomNumber >= SETTING.GO;
};

const playRace = (cars, playCount) => {
  let count = SETTING.ZERO_COUNT;
  while (count < playCount) {
    cars.forEach(car => {
      const moveFoward = checkRandomNumber(getRandomNumber());
      if (moveFoward) {
        car.move();
      }
      printResult(car.name, car.textResult);
    });
    count++;
  }
};

const winner = cars => {
  const max = Math.max(...cars.map(car => car.textResult.length));
  const winner = cars.filter(car => car.textResult.length === max);

  return winner.map(car => car.name).join(',');
};

const race = {
  createRaceCars,
  playRace,
  winner,
};

export default race;
