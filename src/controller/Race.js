import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import CarNamesParser from "../parser/CarNamesParser.js";
import Car from "../model/Car.js";
import Cars from "../model/Cars.js";
import IntParser from "../parser/IntParser.js";
import { ERROR_MESSAGE } from "../constants/messages.js";

class Race {
  static #MIN_CAR_COUNT = 2;
  static #MAX_CAR_COUNT = 100;
  static #MIN_ROUND_NUMBER = 1;
  static #MAX_ROUND_NUMBER = 1000;

  #racingCars = [];
  #roundNumber = 0;
  #carDistanceRecord = {};

  constructor() {}

  async init() {
    const carNames = await this.#getCarNamesFromUser();
    await this.#registerCars(carNames);
    const roundNumber = await this.#getRoundNumberFromUser();
    this.#setRoundNumber(roundNumber);
    this.#startGame();
    this.#AnnounceWinners();
  }

  async #getCarNamesFromUser() {
    const input = await InputView.readCarNames();
    const carNames = CarNamesParser.parse(input);
    return carNames;
  }

  async #registerCars(carNames) {
    const cars = carNames.map((name) => new Car(name));
    this.#setCars(new Cars(cars));
  }

  async #getRoundNumberFromUser() {
    const input = await InputView.readRoundNumber();
    const roundNumber = IntParser.parse(input);
    return roundNumber;
  }

  #setRoundNumber(number) {
    Race.#validateRoundNumber(number);
    this.#roundNumber = number;
  }

  #startGame() {
    OutputView.printBlankLine();
    OutputView.printShowResult();
    for (let i = 0; i < this.#roundNumber; i++) {
      this.#moveCarsAndAnnounceResult();
    }
  }

  #AnnounceWinners() {
    const winners = Race.#getWinners(this.#racingCars, this.#carDistanceRecord);
    OutputView.printWinners(winners);
  }

  #setCars(cars) {
    Race.#validateCarCounts(cars.getLength());
    this.#racingCars = cars;
  }

  static #validateRoundNumber(number) {
    if (number < Race.#MIN_ROUND_NUMBER) {
      throw Error(ERROR_MESSAGE.lessThanMinRound(Race.#MIN_ROUND_NUMBER));
    }

    if (number > Race.#MAX_ROUND_NUMBER) {
      throw Error(ERROR_MESSAGE.moreThanMaxRound(Race.#MAX_ROUND_NUMBER));
    }
  }

  #moveCarsAndAnnounceResult() {
    const roundResult = this.#racingCars.moveAll();

    for (const carName in roundResult) {
      const isMoved = roundResult[carName];

      if (isMoved) this.#increaseCarDistance(carName);
    }

    OutputView.printCarDistanceRecord(this.#racingCars, this.#carDistanceRecord);
  }

  #increaseCarDistance(carName) {
    const prevCarDistance = this.#carDistanceRecord[carName] || 0;

    const updatedRecord = {
      ...this.#carDistanceRecord,
      [carName]: prevCarDistance + 1,
    };
    this.#carDistanceRecord = updatedRecord;
  }

  static #getWinners(racingCars, record) {
    const distanceCounts = Object.values(record);
    const maxCount = Math.max(...distanceCounts);

    const carNames = racingCars.getCarNames();
    const winners = carNames.filter((name) => record[name] === maxCount);
    return winners;
  }

  static #validateCarCounts(number) {
    if (number < Race.#MIN_CAR_COUNT) {
      throw Error(ERROR_MESSAGE.lessThanMinCarCount(Race.#MIN_CAR_COUNT));
    }

    if (number > Race.#MAX_CAR_COUNT) {
      throw Error(ERROR_MESSAGE.moreThenMaxCarCount(Race.#MAX_CAR_COUNT));
    }
  }
}

export default Race;
