export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move(randomNumber) {
    if (randomNumber >= 4) {
      this.distance++;
    }
  }

  getDistance() {
    return "-".repeat(this.distance);
  }
}
