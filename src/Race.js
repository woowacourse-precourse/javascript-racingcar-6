import { Random } from '@woowacourse/mission-utils';

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
      random > 3 && (car.textResult += '-');
    });
    count++;
  }
};

const race = {
  createRaceCars,
  playRace,
};

export default race;
