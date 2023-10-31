import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Car from './model/Car.js';
import RandomNumber from './RandomNumber.js';

import handleError from './utils/handleError.js';
import { validateCarName, validateTryNumber } from './validateInput.js';
import { findWinners } from './utils/findWinners.js';

class App {
  #lastRound;

  #currentRound;

  constructor() {
    this.cars = [];
    this.#currentRound = 0;
    this.#lastRound = 0;
  }

  async play() {
    await this.readCarNames();
    await this.readTryNumber();
    this.race();
    this.findWinners();
  }

  async readCarNames() {
    const carNames = await InputView.readCarNames();

    App.validate(carNames);
    this.setCars(carNames);
  }

  static validate(input) {
    if (Array.isArray(input)) {
      handleError(validateCarName, input);
      return;
    }

    handleError(validateTryNumber, input);
  }

  setCars(carNames) {
    carNames.forEach((carName) => this.cars.push(new Car(carName)));
  }

  async readTryNumber() {
    const tryNumber = await InputView.readTryNumber();

    App.validate(tryNumber);
    this.setLastRound(tryNumber);
  }

  setLastRound(tryNumber) {
    this.#lastRound = tryNumber;
  }

  race() {
    OutputView.printTryResultMessage();

    while (!this.finished()) {
      this.moveCars();
      this.printStep();
      this.goNextRound();
    }
  }

  finished() {
    return this.#currentRound === this.#lastRound;
  }

  moveCars() {
    this.cars.forEach((car) => this.run(car));
  }

  run(car) {
    car.run(RandomNumber.create());
  }

  printStep() {
    OutputView.printStep(this.cars);
  }

  goNextRound() {
    this.#currentRound += 1;
  }

  findWinners() {
    const winnersName = findWinners(this.cars).map((car) => car.getName());

    App.printWinners(winnersName);
  }

  static printWinners(name) {
    OutputView.printWinners(name);
  }
}

export default App;
