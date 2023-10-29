import { Console } from '@woowacourse/mission-utils';

class GameManager {
  constructor() {
    this.cars = [];
    this.attempt = 0;
  }

  async inputNumberOfAttempt() {
    const input = await Console.readLineAsync('시도 횟수 : ');
    this.attempt = Number(input);
  }

  announceInterimResult() {
    this.cars.forEach((car) => {
      car.move();
      Console.print(`${car.name} : ${car.movement}`);
    });
  }
}

export default GameManager;
