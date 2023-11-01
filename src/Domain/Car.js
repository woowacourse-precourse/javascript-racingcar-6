class Car {
  constructor(name, currentPosition) {
    this.name = name;
    this.distance = currentPosition;
  }

  moveForward() {
    this.distance += 1;
  }
}

export default Car;
