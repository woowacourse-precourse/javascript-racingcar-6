import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { INPUT_CARS } from './constants/messages.js';

class GameManager {
  constructor() {
    this.cars = [];
    this.attempt = 0;
  }

  async recruitCars() {
    const input = await Console.readLineAsync(INPUT_CARS);
    this.makeCarList(input);
  }

  makeCarList(input) {
    const nameList = input.replaceAll(' ', '').split(',');
    nameList.forEach((name) => {
      this.cars.push(new Car(name));
    });
  }

  async inputNumberOfAttempt() {
    const input = await Console.readLineAsync('시도 횟수 : ');
    this.attempt = Number(input);
  }

  announceInterimResult() {
    const cars = [{ name: 'pobi', movement: '-' }];
    cars.forEach((car) => {
      Console.print(`${car.name} : ${car.movement}`);
    });
  }
}

export default GameManager;
