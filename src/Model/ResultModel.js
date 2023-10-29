import { ONE, SPACE, STICK, ZERO } from '../constants/constants.js';

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
        totalResult.push(`${carName} : ${this.#makeStick(moveCount)}${SPACE}`);
      });
      totalResult.push(SPACE);
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
