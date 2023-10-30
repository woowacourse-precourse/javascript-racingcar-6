class Car {
  constructor(name, point) {
    this.name = name;
    this.point = point;
  }

  move() {
    this.point += "-";
  }
}

export default Car;
