import Validator from '../util/Validator.js';

class Car {
  convertStringToMap(carNames) {
    Validator.validateCarNames(carNames);

    const carList = carNames
      .split(',')
      .map(string => string.trim())
      .filter(string => string !== '');
    const carMap = new Map();

    carList.forEach(carName => {
      carMap.set(carName, 0);
    });
    return carMap;
  }
}

export default Car;
