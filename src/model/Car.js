import { SYSTEM } from '../constants/System.js';
import Converter from '../utils/StringConvertor.js';

class Car {
  /**
   * @type {Map}
   * @private
   */
  #carData;

  constructor() {
    this.#carData = new Map();
  }

  /** @type {string} */
  static blank = '';

  /**
   * @param {string} carNames
   */
  saveNames(carNames) {
    const carNamesArray = Converter.splitStringToArrayByDelimiter(carNames, SYSTEM.delimiter);
    carNamesArray.forEach((carName) => {
      this.#carData.set(carName, Car.blank);
    });
  }

  /**
   * @returns {Map}
   */
  getData() {
    return this.#carData;
  }
}

export default Car;
