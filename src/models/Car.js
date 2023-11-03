import Validator from '../utils/Validator.js';

class Car {
  convertStringToMap(carNames) {
    Validator.validateCarNames(carNames);

    const cars = carNames
      .split(',')
      .map(string => string.trim())
      .filter(string => string !== '');
    const startLine = new Map();

    cars.forEach(carName => {
      startLine.set(carName, 0);
    });
    return startLine;
  }
}

export default Car;
