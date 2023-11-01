import { RandomGenerator } from '../RandomGenerator.js';
import { Car } from './Car.js';

export class Computer {
  makeNewCars(carNames) {
    const carInstances = [];
    carNames.forEach((carName) => {
      const newCar = this.makeNewCar(carName);

      carInstances.push(newCar);
    });

    return carInstances;
  }

  makeNewCar(name) {
    const randomGenerator = this.makeNewRandomGenerator();
    return new Car(name, randomGenerator);
  }

  makeNewRandomGenerator() {
    return new RandomGenerator(RandomGenerator.RANGE.MIN, RandomGenerator.RANGE.MAX);
  }
}
