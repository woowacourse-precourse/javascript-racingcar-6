class Car {
  #name = '';

  #stepCount = 0;

  constructor(name) {
    this.#name = name;
    this.#stepCount = 0;
  }

  #moveOneStep() {
    this.#stepCount += 1;
  }
}

export default Car;