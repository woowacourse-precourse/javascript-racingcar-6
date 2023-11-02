import pickRandomNumberInRange from './utils/pickRandomNumberInRange';

class Car {
  #carName;

  #forwardDistance;

  constructor(carName) {
    this.#carName = carName;
    this.#forwardDistance = 0;
  }

  getCarName() {
    return this.#carName;
  }

  getForwardDistance() {
    return this.#forwardDistance;
  }

  runRandomAction() {
    const randomNumber = pickRandomNumberInRange(0, 9);

    if (randomNumber >= 4) {
      this.#moveForward();
    }
  }

  #moveForward() {
    this.#forwardDistance += 1;
  }
}

export default Car;
