import { Car } from './Car.js';
import { RandomGenerator } from '../RandomGenerator.js';

export class Cars {
  #list = [];

  constructor(carNames) {
    this.initialize(carNames);
  }

  getList() {
    return this.#list;
  }

  getPositions() {
    return this.#list.map((car) => car.getPosition());
  }

  initialize(carNames) {
    carNames.forEach((name) => {
      const randomGenerator = this.makeNewRandomGenerator();
      const car = new Car(name, randomGenerator);
      this.#list.push(car);
    });
  }

  makeNewRandomGenerator() {
    return new RandomGenerator(RandomGenerator.RANGE.MIN, RandomGenerator.RANGE.MAX);
  }

  move() {
    this.#list.forEach((car) => {
      car.moveOrStop();
    });
  }
}
