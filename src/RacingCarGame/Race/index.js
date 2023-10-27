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
      this.cars.map((car) => car.toStringPosition()).join(SYMBOLS.lineBreak) +
      SYMBOLS.lineBreak
    );
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
