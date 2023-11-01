import { Car } from './Car.js';
import { RandomGenerator } from '../RandomGenerator.js';

export class Cars {
  #list = [];

  constructor(carNames) {
    this.addNewCars(carNames);
  }

  getList() {
    return this.#list;
  }

  getPositions() {
    return this.#list.map((car) => car.getPosition());
  }

  addNewCars(carNames) {
    carNames.forEach((name) => {
      const newCar = this.makeNewCar(name);
      this.#list.push(newCar);
    });
  }

  makeNewCar(name) {
    const randomGenerator = this.makeNewRandomGenerator();
    return new Car(name, randomGenerator);
  }

  makeNewRandomGenerator() {
    return new RandomGenerator(RandomGenerator.RANGE.MIN, RandomGenerator.RANGE.MAX);
  }

  move() {
    this.#list.forEach((car) => {
      car.move();
    });
  }
}
