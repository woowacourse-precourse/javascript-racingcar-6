import Car from "../core/Car.js";

class Cars {
  /**
   * @type {Map<string, Car>}
   */
  #cars = new Map();

  addCars(carNames) {
    // this.#cars = carNaes.map((carName) => new Car(carName));
    carNames.forEach((carName) => {
      this.#cars.set(carName, new Car(carName));
    });
  }

  getCars() {
    return Array.from(this.#cars.values()).map((car) => car.getInfo());
  }

  getCar(name) {
    return this.#cars.get(name);
  }

  moveCar(name) {
    const car = this.getCar(name);

    car.move();
  }
}

export default Cars;
