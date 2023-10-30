import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constants/messages.js';

export default class Validator {
  static validate(condition, errorMessage) {
    try {
      if (!condition) {
        throw errorMessage;
      }
      return true;
    } catch (err) {
      Console.print(err);
      throw new Error(err);
    }
  }

  static validateUndefinedOrNullOrSpacesOrLengthZero(value) {
    return (
      Validator.isUndefinedOrNull(value) &&
      Validator.isMinLengthOneOrIncludeSpace(value)
    );
  }

  static validateMoveCount(value) {
    return Validator.isUndefinedOrNull(value) && Validator.isNum(value);
  }

  static isMinLengthOneOrIncludeSpace(value) {
    return (
      Validator.isMinLengthOne(value) && Validator.isNotIncludeSpace(value)
    );
  }

  static isUndefinedOrNull(value) {
    return Validator.isNotUndefined(value) && Validator.isNotNull(value);
  }

  static isMaxLengthFive(value) {
    return Validator.validate(value.length <= 5, ERROR_MESSAGE.MAX_NUM_ERR);
  }

  static isMinLengthOne(value) {
    return Validator.validate(value.length >= 1, ERROR_MESSAGE.MIN_NUM_ERR);
  }

  static isNotNull(value) {
    return Validator.validate(value !== null, ERROR_MESSAGE.NULL_ERR);
  }

  static isNotUndefined(value) {
    return Validator.validate(value !== undefined, ERROR_MESSAGE.UNDEFINED_ERR);
  }

  static isNotIncludeSpace(value) {
    return Validator.validate(!value.includes(' '), ERROR_MESSAGE.SPACE_ERR);
  }

  static isNum(value) {
    return Validator.validate(
      /^[1-9]\d*$/.test(value),
      ERROR_MESSAGE.IS_NUM_ERR,
    );
  }
}
