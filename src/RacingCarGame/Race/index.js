import { SYMBOLS } from '../constants/index.js';

class Race {
  constructor() {
    this.cars = [];
  }

  addCars(names) {
    this.cars = names
      .replace(/s/g, '')
      .split(SYMBOLS.nameDivider)
      .map((name) => name);
  }

  lap() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  makeOneLapResult() {
    return (
      this.cars.reduce((result, car) => result + car.toStringPosition(), '') +
      '\n'
    );
  }

  calMaxMove() {
    const moves = this.cars.map((car) => car.countMove());
    return Math.max(...moves);
  }
}

export default Race;
