export default class Car {
  #name;
  #advanceCount;

  constructor(name = '') {
    this.#name = name;
    this.#advanceCount = 0;
  }

  getName() {
    return this.#name;
  }

  getAdvanceCount() {
    return this.#advanceCount;
  }

  plusAdvanceCount() {
    this.#advanceCount += 1;
  }
}
