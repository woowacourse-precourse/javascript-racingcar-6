import { Car } from './Car';
import { Console } from '@woowacourse/mission-utils';
import constants from './constants';

const printWinners = (cars) => {
  const maxMovingCount = Math.max(...cars.map((car) => car.movingCount));
  const winners = cars
    .filter((car) => car.movingCount === maxMovingCount)
    .map((car) => car.name);

  if (winners.length === 1) {
    Console.print(`최종 우승자 : ${winners}`);
  } else {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
};

const getTotalScore = (cars) => {
  const scores = cars.map((car) => car.printResult(car.movingCount));
  Console.print('실행 결과');

  scores.forEach((score) => {
    Console.print(score);
    console.log('스코어', score)
  });

  
  printWinners(cars);
};

const generateCar = (carNames, count) => {
  const cars = [];

  carNames.forEach((name) => {
    const car = new Car(name);
    cars.push(car);
    car.doForward(count);
  });

  getTotalScore(cars);
};

module.exports = { generateCar };
