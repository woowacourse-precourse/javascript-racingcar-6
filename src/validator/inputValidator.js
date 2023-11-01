import ERROR_MESSAGE from '../constants/errorMessage.js';
import GAME_OPTION from '../constants/gameOption.js';

class InputValidator {
  static checkhasNoSpace(query) {
    const isValid = query.replace(' ', '').length === query.length;

    return isValid || this.throwError(ERROR_MESSAGE.HAS_SPACE);
  }

  static checkhasWrongName(query) {
    const regex = /[^a-z]/g;
    const isValid = !regex.test(query);

    return isValid || this.throwError(ERROR_MESSAGE.HAS_WRONG_NAME_FORMAT);
  }

  static checkIsInteger(query) {
    const isValid = Number.isSafeInteger(Number(query));

    return isValid || this.throwError(ERROR_MESSAGE.NAME_OUT_OF_RANGE);
  }

  static checkIsPositiveInteger(query) {
    const isValid = Number(query) > 0;

    return isValid || this.throwError(ERROR_MESSAGE.NEGATIVE_INTEGER);
  }

  static checkhasDuplicateName(query) {
    const isValid = new Set(query).size === query.length;

    return isValid || this.throwError(ERROR_MESSAGE.DUPLICATE_NAME);
  }

  static checkIsInNameLengthRange(query) {
    const isValid =
      query.length >= GAME_OPTION.MIN_CAR_NAME_LENGTH &&
      query.length <= GAME_OPTION.MAX_CAR_NAME_LENGTH;

    return isValid || this.throwError(ERROR_MESSAGE.NAME_OUT_OF_RANGE);
  }

  static throwError(errorMessage) {
    throw new Error(`${ERROR_MESSAGE.PREFIX} ${errorMessage}`);
  }

  static validateCarNames(query) {
    const carNames = query.split(GAME_OPTION.INPUT_SEPARATOR);

    carNames.forEach((carName) => {
      this.checkhasNoSpace(carName);
      this.checkIsInNameLengthRange(carName);
      this.checkhasWrongName(carName);
    });

    this.checkhasDuplicateName(carNames);

    return query;
  }

  static validateRoundNumber(query) {
    this.checkIsInteger(query);
    this.checkIsPositiveInteger(query);

    return query;
  }
}

export default InputValidator;
