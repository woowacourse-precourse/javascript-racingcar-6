import View from '../common/View.js';
import Car from './Car.js';

class RacingGame {
  constructor() {
    const carNames = View.readCarNames();

    this.repeatTime = View.readRepeatTime();
    this.cars = carNames.map((name) => new Car(name));
  }

  gameStart() {
    for (let i = 0; i < this.repeatTime; i++) {
      this.moveCars(this.cars);
      this.presentCurrentDistance(this.cars);
    }
    this.getWinners(this.cars);
  }

  moveCars(cars) {
    cars.forEach((car) => {
      car.randomlyMove();
    });
  }

  presentCurrentDistance(cars) {
    const currentDistance = cars.reduce((result, car) => {
      return `${result}${car.currentDistanceMessage()}\n`;
    }, '');
    View.print(currentDistance);
  }

  getWinners(cars) {
    const maxDistance = Math.max(...cars.map((car) => car.carDistance.length));
    const winners = cars.filter(
      (car) => car.carDistance.length === maxDistance
    );
    const winnerNames = winners.map((winner) => winner.carName).join(', ');
    View.print(`최종우승자 : ${winnerNames}`);
  }
}
