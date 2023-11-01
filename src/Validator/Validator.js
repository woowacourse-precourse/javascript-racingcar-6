import { MAXIMUM_CHARACTAR } from '../Constant/Constant.js';
import CustomError from '../CustomError/CustomError.js';

export default class Validator {
  static checkValidCarsName(carNames) {
    carNames.forEach((car) => {
      this.checkStringLength(car);
      this.checkEmpty(car);
    });

    this.checkDuplicate(carNames);
  }

  static checkEmpty(value) {
    if (!value) throw new Error(CustomError.NOT_EMPTY);
  }

  static checkDuplicate(arr) {
    const conditionArr = [...new Set(arr.filter((item, idx) => arr.indexOf(item) !== idx))];
    if (conditionArr[0]) throw new Error(CustomError.NOT_DUPLICATE);
  }

  static checkStringLength(string) {
    if (string.length > MAXIMUM_CHARACTAR) {
      throw new Error(CustomError.NOT_OVER_FIVE_CHARACTER);
    } else return true;
  }

  static checkIsPostiveNum(number) {
    Validator.hasIsNaN(number);
    Validator.hasDecimal(number);
    Validator.hasNegative(number);
    Validator.checkEmpty(number);

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
