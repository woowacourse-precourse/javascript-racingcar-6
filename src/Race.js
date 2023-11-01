import { Random, Console } from '@woowacourse/mission-utils';
import InputManager from './InputManager.js';
import Car from './Car.js';

export default class Race {
  #cars;

  constructor(participants) {
    this.#cars = participants.map((name) => new Car(name));
  }

  printCurrentProcess() {
    this.#cars.forEach((car) => {
      Console.print(`${car.getDistanceBar()}`);
    });
  }

  async playRound() {
    this.#cars.forEach((car) => {
      car.move();
    });
  }
}
