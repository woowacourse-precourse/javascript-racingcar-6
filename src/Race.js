import { Console, Random } from '@woowacourse/mission-utils';

const createRaceCars = userInput => {
  const cars = [];
  userInput
    .split(',')
    .forEach(car => cars.push({ name: car, result: [], textResult: '' }));
  return cars;
};

const playRace = (cars, inputPlayCount) => {
  let count = 1;
  while (count <= inputPlayCount) {
    cars.forEach(car => {
      const random = Random.pickNumberInRange(0, 9);
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
