import { NEW_LINE } from '../constants/constants.js';
import formatCarMovementStrings from '../utils/formatCarMovementStrings.js';

export default class ResultModel {
  #allAttempsResult;

  constructor() {
    this.#allAttempsResult = [];
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
    const displayedResults = [];
    this.#allAttempsResult.forEach((attempResult) => {
      attempResult.forEach(([carName, moveCount]) => {
        displayedResults.push(formatCarMovementStrings(carName, moveCount));
      });
      displayedResults.push(NEW_LINE);
    });
    return displayedResults.join('');
  }
}
