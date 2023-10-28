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
        totalResult.push(`${carName} : ${this.#makeStick(moveCount)}\n`);
      });
      totalResult.push('\n');
    });
    return totalResult.join('');
  }

  #makeStick(moveCount) {
    let count = moveCount;
    let stick = '';
    while (count !== 0) {
      stick += '-';
      count -= 1;
    }
    return stick;
  }
}
