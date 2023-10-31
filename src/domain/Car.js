class Car {
  static DEAD_ZONE = 4;

  static SPEED = 1;

  #distance = 0;

  getDistance() {
    return this.#distance;
  }

  move(power) {
    if (power >= Car.DEAD_ZONE) {
      this.#distance += Car.SPEED;
    }
  }
}

export default Car;
