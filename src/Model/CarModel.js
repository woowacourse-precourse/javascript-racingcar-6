import RACING from '../constants/racing.js';

export default class CarModel {
  #cars;

  constructor() {
    this.#cars = [];
  }

  makeCar(carNameList) {
    this.#cars = carNameList.split(',').map((name) => ({
      name,
      moveCounts: RACING.initMove,
    }));
  }

  getCar() {
    return this.#cars;
  }

  updateMove(carName, isMove) {
    const carToUpdate = this.#cars.find((car) => car.name === carName);
    if (isMove) {
      carToUpdate.moveCounts += RACING.plusMove;
    }
  }
}
