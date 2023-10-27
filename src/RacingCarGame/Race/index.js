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
}

export default Race;
