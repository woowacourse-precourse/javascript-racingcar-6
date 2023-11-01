import { throwError, Conditions } from './Util.js';
import ERROR from '../constants/Error.js';
import CHARACTER from '../constants/Character.js';

const {
  ONLY_ONE,
  NON_EXIST,
  GAP,
  LENGTH,
  DUPLICATE,
  NOT_NUMBER,
  NOT_NATURAL_NUMBER,
} = ERROR;
const {
  isMoreThanOne,
  isPresent,
  isContainSpace,
  isCorrectLength,
  isDuplicate,
  isNumber,
  isNaturalNumber,
} = Conditions;

export default class Validator {
  static validateRacingCars(input) {
    const array = input.split(CHARACTER.COMMA);

    throwError(NON_EXIST, isPresent(input));
    throwError(ONLY_ONE, isMoreThanOne(input));

    array.forEach((value) => {
      throwError(GAP, isContainSpace(value));
      throwError(LENGTH, isCorrectLength(value));
    });

    throwError(DUPLICATE, isDuplicate(array));

    return true;
  }

  static validateAttemptNumber(value) {
    throwError(NON_EXIST, isPresent(value));
    throwError(GAP, isContainSpace(value));
    throwError(NOT_NUMBER, isNumber(value));
    throwError(NOT_NATURAL_NUMBER, isNaturalNumber(value));

    return true;
  }
}
