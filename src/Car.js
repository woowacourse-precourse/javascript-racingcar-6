export default class Car {
  constructor(name) {
    this.name = name;
    if (this.name.length === 0 || this.name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
    }
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
