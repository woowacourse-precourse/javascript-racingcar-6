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

  doRace() {
    const raceResult = [];
    for (let i = 0; i < this.#raceCount; i += 1) {
      raceResult.push(this.#moveCars());
    }
    return raceResult;
  }

  #moveCars() {
    return this.#cars.map((car) => car.move());
  }
}

export default CarRace;
