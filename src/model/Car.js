export default class Car {
  #name;
  #trace;

  constructor(name) {
    this.#name = name;
    this.#trace = [1];
  }

  getName() {
    return this.#name;
  }

  move(randomNumber) {
    if (randomNumber >= 4) {
      this.#trace.push(this.#trace[this.#trace.length - 1] + 1);
      return;
    }

    this.#trace.push(this.#trace[this.#trace.length - 1]);
  }

  getPosition() {
    return this.#trace[this.#trace.length - 1];
  }
}
