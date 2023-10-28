class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(distance) {
    this.#position += distance;
  }

  stop() {
    this.#position += 0;
  }

  getResult() {
    return [this.#name, this.#position];
  }
}

export default Car;
