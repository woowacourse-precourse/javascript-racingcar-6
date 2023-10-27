export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  increasePosition(isMovable) {
    if (isMovable) this.position += 1;
  }
}
