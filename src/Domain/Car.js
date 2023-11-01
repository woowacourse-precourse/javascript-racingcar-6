class Car {
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;
  }

  moveForward() {
    this.distance += 1;
  }
}

export default Car;
