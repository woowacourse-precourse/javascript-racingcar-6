class Car {
  constructor(name, moveCount) {
    this.name = name;
    this.moveCount = moveCount;
  }

  move() {
    this.moveCount += 1;
  }
}

export default Car;
