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

  updateMove(carName, isMove) {
    const carToUpdate = this.#cars.find((car) => car.name === carName);
    return isMove
      ? carToUpdate.isMoves.push(true)
      : carToUpdate.isMoves.push(false);
  }
}
