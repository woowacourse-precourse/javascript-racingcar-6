import { Console } from '@woowacourse/mission-utils';

export class Racing {
  #round = 0;
  #gameCount = 0;
  #cars = [];

  constructor(cars, gameCount) {
    this.gameCount = gameCount;
    this.cars = cars;
    this.round = 0;
  }

  #getCars() {
    return this.cars.map((car) => car.getItem());
  }

  #getWinner() {
    const cars = this.#getCars();
    const positions = cars.map((car) => car.position);
    const maxPosition = Math.max(...positions);

    return cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }

  playRound() {
    this.cars.forEach((car) => {
      car.move();
    });

    this.round++;
  }

  isEnd() {
    return this.round === this.gameCount;
  }

  printRoundResult() {
    this.#getCars().forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    Console.print('\n');
  }

  printWinner() {
    Console.print(`최종 우승자: ${this.#getWinner()}`);
  }
}
