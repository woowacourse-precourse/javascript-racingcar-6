export default class CarModel {
  #cars;

  constructor() {
    this.#cars = [];
  }

  makeCar(carNameList) {
    this.#cars = carNameList.split(',').map((name) => ({
      name,
      isMoves: [],
    }));
  }

  getCar() {
    return this.#cars;
  }
}
