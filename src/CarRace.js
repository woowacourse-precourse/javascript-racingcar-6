import Car from './Car.js';

export default class CarRace {
  constructor(carNames, count) {
    /** @type Array<string> */
    this.carNames = carNames.map((name) => new Car(name));
    /** @type number */
    this.count = count;
  }
}