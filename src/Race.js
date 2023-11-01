import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Race {
  #cars;

  constructor(carNames) {
    this.#cars = [];
    this.createCars(carNames);

    Console.print('\n실행결과');
  }

  createCars(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  runRace(numAttempts) {
    for (let i = 0; i < numAttempts; i += 1) {
      this.#cars.forEach((car) => {
        car.move();
        Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
      });
      Console.print('');
    }
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.position));
    const winners = this.#cars.reduce((acc, curr) => {
      if (curr.position === maxPosition) {
        return [...acc, curr.name];
      }
      return acc;
    }, []);

    return winners;
  }

  get cars() {
    return this.#cars;
  }
}

export default Race;
