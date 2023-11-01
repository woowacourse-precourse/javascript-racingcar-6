import Random from './Random.js';

class Car {
  name;

  movement;

  constructor(name) {
    this.name = name;
    this.movement = [];
  }

  getMovement() {
    return this.movement;
  }

  setMovement(gameCount) {
    this.movement = Random.setMovement(gameCount);
  }

  getMovementLength() {
    const hyphenCount = this.movement.reduce((count, move) => count + (move === '-' ? 1 : 0), 0);
    return hyphenCount;
  }
}

export default Car;
