class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move(shouldMove) {
    if (shouldMove) {
      this.position += 1;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}

module.exports = Car;
