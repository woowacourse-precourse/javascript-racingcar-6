export default class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  increasePosition() {
    this.#position += 1;
  }

  getPositionResult() {
    const positionString = Array.from(
      { length: this.#position },
      () => '-'
    ).join('');

    return { name: this.#name, position: positionString };
  }
}
