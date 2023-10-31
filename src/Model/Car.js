import movePosition from '../utils/movePosition.js';
import { CONSTANT } from '../Constant/CONSTANT.js';

export default class Car {
  /**
   * @private
   * @type { Array<{ name: string, status: number }> }
   */
  #carsPosition;

  setCarsPosition(input) {
    this.#carsPosition = input.split(CONSTANT.comma).map(name => ({ name, position: CONSTANT.emptySpace }));
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
