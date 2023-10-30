import { NEW_LINE, STICK } from '../constants/constants.js';

export default class ResultModel {
  #allAttempsResult;

  #displayedResults;

  constructor() {
    this.#allAttempsResult = [];
    this.#displayedResults = [];
  }

  addAttempsResult(cars) {
    const attempResult = [];
    cars.forEach((car) => {
      attempResult.push(Object.values(car));
    });
    this.#allAttempsResult.push(attempResult);
  }

  getResult() {
    return this.#allAttempsResult;
  }

  makeTotalResult() {
    this.#allAttempsResult.forEach((attempResult) => {
      this.#formatCarMoveStrings(attempResult);
    });
    return this.#displayedResults.join('');
  }

  #formatCarMoveStrings(attempResult) {
    attempResult.reduce((acc, [carName, moveCount]) => {
      acc.push(`${carName} : ${STICK.repeat(moveCount)}${NEW_LINE}`);
      return acc;
    }, this.#displayedResults);
    this.#displayedResults.push(NEW_LINE);
  }
}
