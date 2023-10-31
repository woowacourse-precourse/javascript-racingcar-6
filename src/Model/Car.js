import movePosition from '../utils/movePosition.js';

export default class Car {
  #carsName;

  #carsPosition;

  setCarsName(input) {
    this.#carsName = input.split(',');

    return this.setCarsPostion();
  }

  setCarsPostion() {
    this.#carsPosition = new Array(this.#carsName.length).fill('');
  }

  setCarsRelocation() {
    this.#carsPosition.forEach((prePosition, i) => {
      this.#carsPosition[i] = prePosition + movePosition();
    });
  }

  getCarsName() {
    return this.#carsName;
  }

  getCarsPosition() {
    return this.#carsPosition;
  }
}
