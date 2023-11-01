class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move(randomNumber) {
    if (randomNumber >= 4) {
      this.distance += 1;
    }
  }

  getName() {
    return this.name;
  }

  getDistance() {
    return this.distance;
  }
}

export default Car;
