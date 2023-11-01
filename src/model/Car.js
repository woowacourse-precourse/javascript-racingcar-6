import { SYSTEM } from '../constants/System.js';
import Converter from '../utils/StringConvertor.js';

class Car {
  #carData;

  constructor(carNames) {
    this.#carData = new Map();
    this.#saveCarNames(carNames);
  }

  #saveCarNames(carNames) {
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
