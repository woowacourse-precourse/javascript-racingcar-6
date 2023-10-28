import { GameSettings } from '../constants/GameSettings';

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
    if (this.#shouldMoveBasedOnStrategy()) {
      this.position += 1;
    }
  }
  #shouldMoveBasedOnStrategy() {
    return this.carMovementStrategy.shouldMove();
  }
}
