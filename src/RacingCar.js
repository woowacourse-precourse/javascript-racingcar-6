export default class RacingCar {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  static createRacingCar(name) {
    return new this(name);
  }

  goAhead() {
    this.position += 1;
  }
}
