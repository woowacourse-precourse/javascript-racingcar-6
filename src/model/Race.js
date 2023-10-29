import Car from "./Car";

export default class Race {
  #cars = [];
  #trial;

  constructor(carNames) {
    carNames.split(",").forEach(name => this.addCar(new Car(name)));
  }

  addCar(car) {
    this.#cars.push(car);
  }
  
  setTrial(trial) {
    this.#trial = trial;
  }
}