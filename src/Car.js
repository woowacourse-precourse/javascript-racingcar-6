class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  static initializeCars(names) {
    return names.map(name => new Car(name));
  }
}

export default Car;
