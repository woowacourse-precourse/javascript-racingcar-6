import { Console, Random } from '@woowacourse/mission-utils';
import SETTING from '../constant/Setting.js';
import car from '../model/Car.js';

const createRaceCars = userInput => {
  const names = userInput.split(',');
  const cars = names.map(name => car(name));

  return cars;
};

const playRace = (cars, playCount) => {
  let count = 0;
  while (count < playCount) {
    cars.forEach(car => {
      const random = Random.pickNumberInRange(
        SETTING.MIN_RANGE,
        SETTING.MAX_RANGE,
      );
      car.result.push(random);
      printTextResult(random, car);
    });
    count++;
  }
};

const printTextResult = (random, car) => {
  if (random > 3) car.textResult += '-';
  Console.print(`${car.name} : ${car.textResult}`);
};

const winner = cars => {
  let maxLength = 0;
  let winner = [];

  cars.forEach(car => {
    if (car.textResult.length >= maxLength) {
      maxLength = car.textResult.length;
    }
  });

  cars.forEach(car => {
    if (car.textResult.length === maxLength) {
      winner.push(car.name);
    }
  });

  return winner.join(',');
};

const race = {
  createRaceCars,
  playRace,
  printTextResult,
  winner,
};

export default race;
