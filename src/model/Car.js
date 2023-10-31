class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }
  move(randomNumber) {
    if (randomNumber >= 4) this.location += 1;
  }
}

export default Car;
