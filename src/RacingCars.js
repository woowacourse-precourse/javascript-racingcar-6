import Car from './Car.js';

class RacingCars {
  #cars;

  constructor(carNameList) {
    this.#cars = carNameList.map((carName) => new Car(carName));
  }
}

export default RacingCars;
