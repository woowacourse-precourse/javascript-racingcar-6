class Car {
  #name;
  #position = [];

  constructor(name) {
    this.#name = name;
  }

  getPosition() {
    return this.#position;
  }

  printPosition() {
    this.#position.push('-');
  }

  getName() {
    return this.#name;
  }
}

export default Car;
