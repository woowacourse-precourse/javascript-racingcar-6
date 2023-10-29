import { ONE, NEW_LINE, STICK, ZERO } from '../constants/constants.js';

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
        totalResult.push(
          `${carName} : ${this.#makeStick(moveCount)}${NEW_LINE}`,
        );
      });
      totalResult.push(NEW_LINE);
    });
    return totalResult.join('');
  }

  #makeStick(moveCount) {
    let count = moveCount;
    let sticks = STICK.newSticks;
    while (count !== ZERO) {
      sticks += STICK.oneStick;
      count -= ONE;
    }
    return sticks;
  }
}
