class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  oneStepForward() {
    this.step += 1;
  }

  get step() {
    return this.step;
  }
}