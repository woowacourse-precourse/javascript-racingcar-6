import Car from '../Car/index.js';
import { SYMBOLS } from '../constants/index.js';

class Race {
  constructor() {
    this.cars = [];
    this.lapLogs = [];
    this.lapCount = 0;
  }

  setLapCount(lapCount) {
    this.lapCount = lapCount;
  }

  addCars(names) {
    this.cars = names
      .replace(/s/g, '')
      .split(SYMBOLS.nameDivider)
      .map((name) => new Car(name));
  }

  logLap() {
    const lapLog = this.cars.map((car) => car.toStringPosition()).join('');
    this.lapLogs.push(lapLog);
  }

  lap() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  makeLapResult() {
    for (let i = 0; i < this.lapCount; i++) {
      this.lap();
      this.logLap();
    }
    return this.lapLogs.join(SYMBOLS.lineBreak);
  }

  calMaxMove() {
    const moves = this.cars.map((car) => car.countMove());
    return Math.max(...moves);
  }

  electWinner() {
    const maxMoveCount = this.calMaxMove();
    return this.cars
      .filter((car) => maxMoveCount === car.countMove())
      .map((car) => car.name)
      .join(SYMBOLS.winnerDivider);
  }
}

export default Race;
