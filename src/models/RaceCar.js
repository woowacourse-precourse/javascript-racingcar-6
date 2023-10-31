class RaceCar {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  moveFoward() {
    this.distance += 1;
  }
}

export default RaceCar;
