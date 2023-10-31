class Car {
  constructor(name) {
    this.name = name;
    this.carPosition = 0;
  }
  moveForward() {
    this.carPosition += 1;
  }
}

export default Car;
