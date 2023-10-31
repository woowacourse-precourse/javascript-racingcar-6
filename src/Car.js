export class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  oneStepForward() {
    this.step += 1;
  }

  get get_step() {
    return this.step;
  }

  get get_name() {
    return this.name;
  }
}