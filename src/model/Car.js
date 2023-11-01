import { GAME_INT } from '../constants/constants';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    this.distance += 1;
  }

  getName() {
    return this.name;
  }

  getDistance() {
    return this.distance;
  }
}

export default Car;
