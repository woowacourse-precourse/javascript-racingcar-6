import movePosition from '../utils/movePosition.js';
import CONSTANT from '../Constant/CONSTANT.js';
import { MOVESET } from '../Constant/SETTING.js';

export default class Car {
  /**
   * @private
   * @type { Array<{ name: string, status: number }> }
   */
  #carsPosition;

  setCarsPosition(input) {
    this.#carsPosition = input.split(CONSTANT.splitCode).map(name => ({ name, position: MOVESET.stay }));
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
