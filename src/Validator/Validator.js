import { MAXIMUM_CHARACTAR } from '../Constant/Constant.js';
import CustomError from '../CustomError/CustomError.js';

export default class Validator {
  // 추후분리

  static checkValidCarsName(carNames) {
    carNames.forEach((car) => this.checkStringLength(car));
  }

  // 비었을때, 이름 중복 체크

  static checkStringLength(string) {
    if (string.length > MAXIMUM_CHARACTAR) {
      throw new Error(CustomError.NOT_OVER_FIVE_CHARACTER);
    } else return true;
  }

  static checkIsPostiveNum(number) {
    Validator.hasIsNaN(number);
    Validator.hasDecimal(number);
    Validator.hasNegative(number);

    return true;
  }

  static hasIsNaN(number) {
    if (Number.isNaN(+number)) throw new Error(CustomError.ISNAN_ERROR_MSG);
  }

  static hasDecimal(number) {
    if (String(number).includes('.')) throw new Error(CustomError.ISDECIMAL_ERROR_MSG);
  }

  static hasNegative(number) {
    if (Number(number) < 0) throw new Error(CustomError.ISNEGATIVE_VALUE);
  }
}
