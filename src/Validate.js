import { CAR, REG_EXP, TRY } from './constants/constants';

class Validate {
  static isCarNameLengthValid(cars) {
    return cars.every(car => car.length <= CAR.LENGTH);
  }

  static minCarsNumber(cars) {
    return cars.length >= CAR.MIN;
  }

  static isNumber(count) {
    return REG_EXP.INPUT_NUMBER_VALIDATION.test(count);
  }

  static minTryNumber(count) {
    return count >= TRY.MIN;
  }
}

export default Validate;
