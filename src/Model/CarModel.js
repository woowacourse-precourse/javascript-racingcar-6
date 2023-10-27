export default class CarModel {
  #cars;

  constructor() {
    this.#cars = [];
  }

  makeCar(carNameList) {
    this.#cars = carNameList.split(',').map((name) => ({
      name,
      moveCounts: 0,
    }));
  }

  getCar() {
    return this.#cars;
  }

  updateMove(carName, isMove) {
    const carToUpdate = this.#cars.find((car) => car.name === carName);
    if (isMove) {
      carToUpdate.moveCounts += 1;
    }
  }
}
