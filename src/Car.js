class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    this.distance += 1;
  }
}

export default Car;
