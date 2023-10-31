export class Car {
  constructor(name) {
    this.name = name;
    this.progress = 0;
  }

  move() {
    this.progress += 1;
  }
}
