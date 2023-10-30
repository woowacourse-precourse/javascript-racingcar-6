export default class Car {
  #Car = {
    name: null,
    advance: 0,
  };

  constructor(name) {
    this.#Car.name = name;
  }

  getCar() {
    return this.#Car;
  }

  getName() {
    return this.#Car.name;
  }

  getAdvance() {
    return this.#Car.advance;
  }
}
