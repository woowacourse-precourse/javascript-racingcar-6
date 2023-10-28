import InputView from './view/InputView.js';
import Car from './model/Car.js';
import RandomNumber from './model/RandomNumber.js';

import ErrorHandler from './utils/ErrorHandler.js';
import { validateCarName, validateTryNumber } from './Validator.js';

class App {
  constructor() {
    this.cars = [];
    this.randomNumber = new RandomNumber();
    this.currentTryNumber = 0;
  }

  async play() {
    await this.readCarName();
  }

  async readCarName() {
    const carName = await InputView.readCarName();

    this.validate(carName);
    this.createCars(carName);
    await this.readTryNumber();
  }

  validate(input) {
    if (Array.isArray(input)) {
      ErrorHandler(validateCarName, input);
      return;
    }

    ErrorHandler(validateTryNumber, input);
  }

  createCars(cars) {
    cars.forEach((car) => this.cars.push(new Car(car)));
  }

  async readTryNumber() {
    const tryNumber = await InputView.readTryNumber();

    this.validate(tryNumber);
    this.race(tryNumber);
  }

  race(tryNumber) {
    while (tryNumber !== this.currentTryNumber) {
      this.cars.forEach((car) => this.run(car));
      this.addCurrentTryNumber();
    }
  }

  run(car) {
    this.randomNumber.create();
    car.run(this.randomNumber.canMove());
  }

  addCurrentTryNumber() {
    this.currentTryNumber += 1;
  }
}

export default App;
