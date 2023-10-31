class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const randomValue = this.getRandomNumber();
    if (randomValue >= 4) {
      this.#position++;
    }
  }

  getRandomNumber() {
    const random = Random.pickNumberInRange(0, 9);
    return random;
  }

  get name() {
    return this.#name;
  }

  set name(carName) {
    this.#name = carName;
  }

  get position() {
    return this.#position;
  }

  set position(moveNumber) {
    this.#position = moveNumber;
  }
}

module.exports = Car;
