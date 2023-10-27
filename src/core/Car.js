class Car {
  #name = "";
  #distance = 0;

  constructor(name) {
    this.#name = name;
  }

  move() {
    this.#distance += 1;
  }

  getName() {
    return this.#name;
  }

  getInfo() {
    return { name: this.#name, distance: this.#distance };
  }
}

export default Car;
