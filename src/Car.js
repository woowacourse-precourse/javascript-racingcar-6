import * as c from "./constants/const.js";

export class Car {
  constructor(name) {
    this.name = name;
    this.distance = c.INITIAL_DISTANCE;
  }

  move() {
    this.distance++;
  }
}
