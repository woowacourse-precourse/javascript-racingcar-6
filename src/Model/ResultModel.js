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
}
