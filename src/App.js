import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Car from './model/Car.js';
import RandomNumber from './model/RandomNumber.js';

import handleError from './utils/handleError.js';
import { validateCarName, validateTryNumber } from './Validator.js';
import { findWinners } from './utils/findWinners.js';

class App {
  constructor() {
    this.cars = [];
    this.randomNumber = new RandomNumber();
    this.currentTryNumber = 0;
  }

  async play() {
    await this.readCarNames();
    await this.readTryNumber();
  }

  async readCarNames() {
    const carNames = await InputView.readCarNames();

    this.validate(carNames);
    this.createCars(carNames);
  }

  validate(input) {
    if (Array.isArray(input)) {
      handleError(validateCarName, input);
      return;
    }

    handleError(validateTryNumber, input);
  }

  createCars(carNames) {
    carNames.forEach((carName) => this.cars.push(new Car(carName)));
  }

  async readTryNumber() {
    const tryNumber = await InputView.readTryNumber();

    this.validate(tryNumber);
    this.race(tryNumber);
  }

  race(tryNumber) {
    OutputView.printTryResultMessage();

    while (tryNumber !== this.currentTryNumber) {
      this.cars.forEach((car) => this.move(car));
      this.printStep();
      this.addCurrentTryNumber();
    }

    this.findWinners();
  }

  move(car) {
    this.randomNumber.create();
    car.run(this.randomNumber.canMove());
  }

  printStep() {
    OutputView.printStep(this.cars);
  }

  addCurrentTryNumber() {
    this.currentTryNumber += 1;
  }

  findWinners() {
    const winnersName = findWinners(this.cars).map((car) => car.getName());

    this.printWinners(winnersName);
  }

  printWinners(name) {
    OutputView.printWinners(name);
  }
}

export default App;
