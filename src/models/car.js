class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  increaseScore() {
    this.score += 1;
  }
}

module.exports = Car;
