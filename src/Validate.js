import { CAR } from './constants/constants';

class Validate {
  static isCarNameLengthValid(cars) {
    return cars.every(car => car.length <= CAR.LENGTH);
  }

  static minCarsNumber(cars) {
    return cars.length >= CAR.MIN;
  }
}

export default Validate;
