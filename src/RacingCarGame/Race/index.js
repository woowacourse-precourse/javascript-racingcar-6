import Car from '../Car/index.js';
import { SYMBOLS } from '../constants/index.js';

class Race {
  constructor() {
    this.cars = [];
    this.lapCount = 0;
  }

  setLapCount(lapCount) {
    this.lapCount = lapCount;
  }

  addCars(names) {
    this.cars = names
      .replace(/\s/g, '')
      .split(SYMBOLS.nameDivider)
      .filter(Boolean)
      .map((name) => new Car(name));
  }

  logLap() {
    return this.cars.map((car) => car.formatPosition()).join('');
  }

  lap() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  formatResult() {
    return Array.from({ length: this.lapCount }, () => {
      this.lap();
      return this.logLap();
    }).join(SYMBOLS.lineBreak);
  }

  calMaxMove() {
    const moves = this.cars.map((car) => car.countMove());
    return Math.max(...moves);
  }

  electWinner() {
    const maxMoveCount = this.calMaxMove();
    return this.cars
      .filter((car) => maxMoveCount === car.countMove())
      .map((car) => car.getName())
      .join(SYMBOLS.winnerDivider);
  }
}

export default Race;
