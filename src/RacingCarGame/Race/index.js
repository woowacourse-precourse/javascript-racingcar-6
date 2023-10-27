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
}

export default Race;
