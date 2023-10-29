import Car from "./Car";

export default class Race {
  #cars = [];

  constructor(carNames) {
    carNames.split(",").forEach(name => this.addCar(new Car(name)));
  }

  addCar(car) {
    this.#cars.push(car);
  }
}