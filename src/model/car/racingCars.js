import RacingCar from "./racingCar.js";
import Names from "./carNames.js";

class RacingCars {
  #cars = [];

  constructor() {
    this.carNames = new Names();
  }

  getCars() {
    return this.#cars;
  }

  createCars(inputNamesString) {
    this.carNames.createValidNameList(inputNamesString);
    this.carNames.getNames().forEach((car) => {
      this.createCar(car);
    });
  }

  createCar(carName) {
    const car = new RacingCar(carName);
    this.#cars.push(car);
  }

  moveAllCars() {
    this.#cars.forEach((car) => car.move());
  }
}

export default RacingCars;
