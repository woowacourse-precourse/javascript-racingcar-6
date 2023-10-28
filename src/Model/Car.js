class Car {
  name;
  #position;
  constructor() {
    this.name = '';
    this.#position = 0;
  }

  getName(name) {
    this.name = name;
  }

  checkPosition(tryNumber) {
    if (tryNumber >= 4) this.#position += 1;
  }

  getPosition() {
    return this.#position;
  }
}

export default Car;