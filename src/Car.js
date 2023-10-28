class Car {
  #name;
  #position = [];

  constructor(name) {
    this.#name = name;
  }

  getPosition() {
    return this.#position;
  }

  setPosition() {
    this.#position.push('-');
  }

  getName() {
    return this.#name;
  }
}

export default Car;
