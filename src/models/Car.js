class Car {
  #distance;

  #name;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
