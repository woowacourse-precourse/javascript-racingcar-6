export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  increasePosition(isMovable) {
    if (isMovable) this.position += 1;
  }

  getPositionResult() {
    const positionString = Array.from(
      { length: this.position },
      () => '-'
    ).join('');

    return positionString;
  }
}
