import { CAR_NAME } from './constants/constants';

class Validate {
  static isCarNameLengthValid(cars) {
    return cars.every(car => car.length <= CAR_NAME.LENGTH);
  }
}

export default Validate;
