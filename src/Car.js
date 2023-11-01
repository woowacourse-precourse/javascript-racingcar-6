class Car {
  #carName;
  #distance;

  constructor(carName) {
    this.carName = carName;
    this.distance = 0;
  }

  get carName() {
    return this.#carName;
  }

  set carName(carName) {
    this.#carName = carName;
  }

  get distance() {
    return this.#distance;
  }
  set distance(distance) {
    this.#distance = distance;
  }

  get carStatus() {
    return {
      carName: this.carName,
      distance: this.distance,
    };
  }

  move(power) {
    this.distance = this.distance + power;
  }
}

export default Car;
