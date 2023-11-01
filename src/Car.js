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
}

export default Car;
