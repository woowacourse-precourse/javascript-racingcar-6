import CAR from "./constants/constant";

class Car {
  constructor(name) {
    this.name = name;
    this.position = CAR.position.default;
  }

  move() {
    this.position += CAR.move.unit;
  }
}

export default Car;
