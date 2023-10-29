import Car from "./Car";

export default class Race {
  #cars = [];

  constructor(carNames) {
    this.#cars = this.registerCars(carNames);
  }

  registerCars(names) {
    const cars = [];
    for (let name of names.split(",")) {
      cars.push(new Car(name));
    }
    return cars;
  }
}