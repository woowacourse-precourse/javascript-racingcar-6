export default class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  getName() {
    return this.name;
  }

  oneStepForward() {
    this.move += 1;
  }

  getMove() {
    return this.move;
  }
}
