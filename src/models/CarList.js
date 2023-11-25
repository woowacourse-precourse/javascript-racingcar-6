import { ERROR_MESSAGE, NAME_REGEXP, RULE } from '../constants/index.js';
import { throwError } from '../utils/index.js';
import Car from './Car.js';

class CarList {
  /**
   * @type {string[]|undefined}
   */
  #carNameArray;

  /**
   * @param {string} text
   */
  constructor(text) {
    this.#isDelimiter(text);
    this.#setCarNameArray(text);
    this.#validateNumberOfCar();
    this.#validateName();
  }

  #isDelimiter(text) {
    if (!text.includes(RULE.delimiter))
      throwError(ERROR_MESSAGE.delimiterError);
  }
  #setCarNameArray(text) {
    this.#carNameArray = text.split(RULE.delimiter).map((v) => v.trim());
  }
  #validateNumberOfCar() {
    const length = this.#carNameArray.length;
    const { min, max } = RULE.numberOfCar;

    if (length < min || length > max) throwError(ERROR_MESSAGE.numberOfCar);
  }
  #validateName() {
    this.#carNameArray.forEach((name) => {
      const pass = NAME_REGEXP.test(name);

      if (!pass) throwError(ERROR_MESSAGE.nameError);
    });
  }
  getCarArray() {
    return this.#carNameArray.map((n) => new Car(n));
  }
}

export default CarList;
