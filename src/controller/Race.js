import InputView from "../view/InputView.js";
import Car from "../model/Car.js";
import Cars from "../model/Cars.js";
import CarNamesParser from "../parser/CarNamesParser.js";
import IntParser from "../parser/IntParser.js";
import { ERROR_MESSAGE } from "../constants/messages.js";
import OutputView from "../view/OutputView.js";

class Race {
  static #MIN_CAR_COUNT = 2;
  static #MAX_CAR_COUNT = 100;
  static #MIN_ROUND_NUMBER = 1;
  static #MAX_ROUND_NUMBER = 100;

  #racingCars = [];
  #roundNumber = 0;
  #carDistanceRecord = {};

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
    OutputView.printShowResult();
    for (let i = 0; i < this.#roundNumber; i++) {
      this.#processRound();
    }
  }

  #processRound() {
    const roundResult = this.#racingCars.moveAll();

    for (const carName in roundResult) {
      const isMoved = roundResult[carName];
      if (isMoved) this.#increaseCarDistance(carName);
    }

    OutputView.printCarDistanceRecord(this.#carDistanceRecord);
  }

  #increaseCarDistance(carName) {
    const prevCarDistance = this.#carDistanceRecord[carName] || 0;

    const updatedRecord = {
      ...this.#carDistanceRecord,
      [carName]: prevCarDistance + 1,
    };
    this.#carDistanceRecord = updatedRecord;
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
