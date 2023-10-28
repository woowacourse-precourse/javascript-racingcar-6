import { GameSettings } from '../constants/GameSettings.js';

export default class Car {
  constructor(name, carMovementStrategy) {
    this.name = name;
    this.position = 0;
    this.carMovementStrategy = carMovementStrategy;
  }

  getRepresentation() {
    return GameSettings.CAR_REPRESENTATION.repeat(this.position);
  }

  move() {
    if (this.#shouldMove()) {
      this.position += 1;
    }
  }
  #shouldMove() {
    return this.carMovementStrategy.shouldMove();
  }
}
