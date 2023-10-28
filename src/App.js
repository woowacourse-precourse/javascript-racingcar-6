import InputView from './view/InputView.js';
import Car from './model/Car.js';

import ErrorHandler from './utils/ErrorHandler.js';
import { validateCarName, validateTryNumber } from './Validator.js';

class App {
  constructor() {
    this.cars = [];
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
    console.log(this.cars);
  }

  async readTryNumber() {
    const tryNumber = await InputView.readTryNumber();

    this.validate(tryNumber);
  }
}

export default App;
