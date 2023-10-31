class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  forward() {
    this.location += 1;
  }
}

export default Car;
