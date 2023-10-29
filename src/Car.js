class Car {
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;
  }
  go() {
    this.distance++;
  }
  getName() {
    return this.name;
  }
  getDistance() {
    return this.distance;
  }
}

export default Car;
