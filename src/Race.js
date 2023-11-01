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

  calculateWinner() {
    const maxDistance = this.#cars.reduce(
      (acc, { distance }) => (acc < distance ? distance : acc),
      0
    );

    const winners = this.#cars
      .filter(({ distance }) => distance === maxDistance)
      .map((car) => car.name);

    return winners;
  }

  printResult() {
    const winners = this.calculateWinner();
    const winnerString = winners.join(',');

    Console.print(`최종 우승자 : ${winnerString}`);
  }

  async playRound() {
    this.#cars.forEach((car) => {
      car.move();
    });
  }
}
