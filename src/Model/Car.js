import movePosition from '../utils/movePosition.js';

export default class Car {
  /**
   * @private
   * @type { Array<{ name: string, status: number }> }
   */
  #carsPosition;

  setCarsPosition(input) {
    this.#carsPosition = input.split(',').map(name => ({ name, position: '' }));
  }

  setCarsRelocation() {
    this.#carsPosition.forEach(prePosition => {
      prePosition.position += movePosition();
    });
  }

  getCarsPosition() {
    return this.#carsPosition;
  }
}
