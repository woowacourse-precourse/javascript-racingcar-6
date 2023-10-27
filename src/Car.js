class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  getName() {
    return this.name;
  }

  getMoveCount() {
    return this.moveCount;
  }

  move() {
    this.moveCount += 1;
  }
}

export default Car;
