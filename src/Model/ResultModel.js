import { NEW_LINE } from '../constants/constants.js';
import makeResultStringTemplate from '../utils/makeResultStringTemplate.js';

export default class ResultModel {
  #result;

  constructor() {
    this.#result = [];
  }

  addAttempsResult(cars) {
    const attempResult = [];
    cars.forEach((car) => {
      attempResult.push(Object.values(car));
    });
    this.#result.push(attempResult);
  }

  getResult() {
    return this.#result;
  }

  makeTotalResult() {
    const totalResult = [];
    this.#result.forEach((attempResult) => {
      attempResult.forEach(([carName, moveCount]) => {
        totalResult.push(makeResultStringTemplate(carName, moveCount));
      });
      totalResult.push(NEW_LINE);
    });
    return totalResult.join('');
  }
}
