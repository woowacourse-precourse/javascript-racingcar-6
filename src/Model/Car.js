import movePosition from '../utils/movePosition.js';

export default class Car {
  #carsPosition;

  setCarsPosition(input) {
    this.#carsPosition = input.split(',').map(name => ({ name, position: '' }));
  }

  setCarsRelocation() {
    this.#carsPosition.forEach((prePosition, i) => {
      this.#carsPosition[i].position = prePosition.position + movePosition();
    });
  }

  getCarsPosition() {
    return this.#carsPosition;
  }
}
