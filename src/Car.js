import { Console, Random } from '@woowacourse/mission-utils';
import Validate from './Validate.js';

class Car {
  #cars;

  constructor(names) {
    this.#cars = [];

    names.split(',').forEach((name) => {
      Validate.checkNameLength(name);
      this.#cars.push({ name, count: 0 });
    });
  }

  static updateCarCount(car) {
    const newCar = { ...car };
    if (Random.pickNumberInRange(0, 9) >= 4) {
      newCar.count += 1;
    }
    Console.print(`${newCar.name} : ${'-'.repeat(newCar.count)}`);
    return newCar;
  }

  moveCar() {
    const updatedCars = this.#cars.map((car) => Car.updateCarCount(car));
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
