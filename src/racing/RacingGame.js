import { MESSAGE } from '../constants/constants.js';
import View from '../view/View.js';
import Car from './Car.js';

export default class RacingGame {
  async init() {
    const carNames = await View.readCarNames();

    this.repeatTime = await View.readRepeatTime();
    this.cars = carNames.map((name) => new Car(name));
  }

  async gameStart() {
    await this.init();

    for (let i = 0; i < this.repeatTime; i++) {
      this.moveCars();
      this.presentCurrentDistance();
    }
    this.getWinners();
  }

  moveCars() {
    this.cars.forEach((car) => {
      car.randomlyMove();
    });
  }

  presentCurrentDistance() {
    const currentDistance = this.cars.reduce((result, car) => {
      return `${result}${car.currentDistanceMessage()}\n`;
    }, '');
    View.print(currentDistance);
  }

  getWinners() {
    const maxDistance = Math.max(
      ...this.cars.map((car) => car.carDistance.length)
    );
    const winners = this.cars.filter(
      (car) => car.carDistance.length === maxDistance
    );
    const winnerNames = winners.map((winner) => winner.carName).join(', ');
    View.print(`${MESSAGE.winner}${winnerNames}`);
  }
}

