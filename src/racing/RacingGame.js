import View from '../common/View.js';
import Car from './Car.js';

class RacingGame {
  constructor() {
    const carNames = View.readCarNames();

    this.repeatTime = View.readRepeatTime();
    this.cars = carNames.map((name) => new Car(name));
  }
}
