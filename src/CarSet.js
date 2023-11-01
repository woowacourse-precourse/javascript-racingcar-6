import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class CarSet {
  #carSet;

  #maxPostion;

  constructor(nameArray) {
    this.#maxPostion = 0;
    this.#carSet = [];

    nameArray.map((name) => {
      this.#carSet.push(new Car(name));
    });
  }

  race() {
    this.#carSet.map((car) => {
      car.tryMove();
      const position = car.getPosition();
      if (this.#maxPostion < position) this.#maxPostion = position;
      car.printPosition();
    });
    Console.print('');
  }

  findWinners() {
    const winners = this.#carSet
      .map((car) => {
        if (car.getPosition() === this.#maxPostion) return car.getName();
      })
      .filter((car) => car);
    return winners;
  }
}

export default CarSet;
