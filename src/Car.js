class Car {
  #name;

  #distanceString = "";

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setDistancePlusOne() {
    this.#distanceString += "-";
  }

  getDistanceString() {
    return this.#distanceString;
  }
}

export default Car;
