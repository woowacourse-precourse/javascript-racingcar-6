import { SYSTEM } from '../constants/System.js';
import Converter from '../utils/StringConvertor.js';

class Car {
  #carData;

  constructor() {
    this.#carData = new Map();
  }

  saveNames(carNames) {
    const carNamesArray = Converter.splitStringToArrayByDelimiter(carNames, SYSTEM.delimiter);
    carNamesArray.forEach((carName) => {
      this.#carData.set(carName, '');
    });
  }

  getData() {
    return this.#carData;
  }
}

export default Car;
