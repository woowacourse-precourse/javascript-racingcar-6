import Car from "./Car.js";

class CarRace {
  #cars = [];
  #carNameList;
  #raceCount;

  constructor(carNameList, raceCount) {
    this.#carNameList = carNameList;
    this.#raceCount = raceCount;
    this.#createCar();
  }

  #createCar() {
    this.#carNameList.forEach((name) => this.#cars.push(new Car(name)));
  }
}

export default CarRace;
