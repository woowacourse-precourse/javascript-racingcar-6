const { Random } = require('./Constant');

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
      this.#position += 1;
    }
  }

  getRandomNumber() {
    const random = Random.pickNumberInRange(0, 9);
    return random;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

module.exports = Car;
