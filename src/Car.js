import { Console, Random } from '@woowacourse/mission-utils';
import ERROR from './constants/Error.js';

class Car {
  #cars;

  constructor(names) {
    this.#cars = [];

    names.split(',').forEach((name) => {
      if (name.length > 5 || name.length < 1) {
        throw new Error(ERROR.nameLength);
      }
      this.#cars.push({ name, count: 0 });
    });
  }

  startGoOrStop() {
    const updatedCars = this.#cars.map((car) => {
      const newCar = { ...car };
      if (Random.pickNumberInRange(0, 9) >= 4) {
        newCar.count += 1;
      }
      Console.print(`${newCar.name} : ${'-'.repeat(newCar.count)}`);
      return newCar;
    });
    Console.print('');

    this.#cars = updatedCars;
  }

  findMaxCount() {
    const maxCount = Math.max(...this.#cars.map((car) => car.count));
    const maxCountCars = this.#cars.filter((car) => car.count === maxCount);
    const maxCountCarNames = maxCountCars.map((car) => car.name);
    return maxCountCarNames;
  }
}

export default Car;
