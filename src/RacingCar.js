class RacingCar {
  constructor(name, distance) {
    this.name = name;
    this.distance = distance;
  }

  get() {
    return this._distance;
  }
  set(value) {
    this._distance = value;
  }

  // 전진, 후진
  goForward(number) {
    if (number < 4 ) return false;
    return true;
  } 

}

export { RacingCar };