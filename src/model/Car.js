export default class Car {
  #name;

  #position;

  #carMovementStrategy;

  constructor(name, carMovementStrategy) {
    this.#name = name;
    this.#position = 0;
    this.#carMovementStrategy = carMovementStrategy;
  }

  getCarInformation() {
    return {
      name: this.#name,
      position: this.#position,
    };
  }

  move() {
    if (this.#shouldMoveBasedOnStrategy()) {
      this.#position += 1;
    }
  }

  #shouldMoveBasedOnStrategy() {
    return this.#carMovementStrategy.shouldMove();
  }
}
