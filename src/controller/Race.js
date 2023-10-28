import InputView from "../view/InputView.js";
import Car from "../model/Car.js";
import Cars from "../model/Cars.js";
import CarNamesParser from "../parser/CarNamesParser.js";
import IntParser from "../parser/IntParser.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

class Race {
  static #MIN_CAR_COUNT = 2;
  static #MAX_CAR_COUNT = 100;
  static #MIN_ROUND_NUMBER = 1;
  static #MAX_ROUND_NUMBER = 100;

  #racingCars = [];
  #roundNumber = 0;
  #carsPosition = {};

  constructor() {}

  async init() {
    await this.#registerCarsFromUserInput();
    await this.#setRoundNumberFromUserInput();
    this.#startGame();
  }

  async #registerCarsFromUserInput() {
    const input = await InputView.readCarNames();
    const carNames = CarNamesParser.parse(input);
    const cars = carNames.map((name) => new Car(name));
    this.#registerCars(new Cars(cars));
  }

  async #setRoundNumberFromUserInput() {
    const input = await InputView.readRoundNumber();
    const roundNumber = IntParser.parse(input);
    this.#setRoundNumber(roundNumber);
  }

  #startGame() {
    for (let i = 0; i < this.#roundNumber; i++) {
      this.#processRound();
    }
  }

  #processRound() {
    const roundResult = this.#racingCars.moveAll();

    const carNames = Object.keys(roundResult);
    carNames.forEach((carName) => {
      const isMove = roundResult[carName];
      if (isMove) this.#increaseCarPosition(carName);
    });
  }

  #increaseCarPosition(carName) {
    const prevCarPosition = this.#carsPosition[carName] || 0;

    const updatedCarsPosition = {
      ...this.#carsPosition,
      [carName]: prevCarPosition + 1,
    };
    this.#carsPosition = updatedCarsPosition;
  }

  #registerCars(cars) {
    Race.#validateCarCounts(cars.length);
    this.#racingCars = cars;
  }

  static #validateCarCounts(number) {
    if (number < Race.#MIN_CAR_COUNT) {
      throw Error(ERROR_MESSAGE.lessThanMinCarCount(Race.#MIN_CAR_COUNT));
    }

    if (number > Race.#MAX_CAR_COUNT) {
      throw Error(ERROR_MESSAGE.moreThenMaxCarCount(Race.#MAX_CAR_COUNT));
    }
  }

  #setRoundNumber(number) {
    Race.#validateRoundNumber(number);
    this.#roundNumber = number;
  }

  static #validateRoundNumber(number) {
    if (number < Race.#MIN_ROUND_NUMBER) {
      throw Error(ERROR_MESSAGE.lessThanMinRound(Race.#MIN_ROUND_NUMBER));
    }

    if (number > Race.#MAX_ROUND_NUMBER) {
      throw Error(ERROR_MESSAGE.moreThanMaxRound(Race.#MAX_ROUND_NUMBER));
    }
  }
}

export default Race;
