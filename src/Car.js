export default class Car {
  #name;
  #distance;
  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }
  get carName() {
    return this.#name;
  }
  get distance() {
    return this.#distance;
  }
}
