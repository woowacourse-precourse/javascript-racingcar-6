export default class Car {
  #carsName;

  #carsPosition;

  constructor() {
    this.#carsName = [];
    this.#carsPosition = {};
  }

  async setCarsName(input) {
    this.#carsName = await input.split(',');

    return this.setCarsPostion();
  }

  setCarsPostion() {
    this.#carsName.forEach(carName => {
      this.#carsPosition[carName] = '';
    });
  }

  getCarsName() {
    return this.#carsName;
  }

  getCarsPosition() {
    return this.#carsPosition;
  }
}
