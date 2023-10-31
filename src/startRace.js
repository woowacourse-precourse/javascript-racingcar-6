import { Car } from './Car';
import { Console } from '@woowacourse/mission-utils';
import constants from './constants';

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
