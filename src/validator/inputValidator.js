import ERROR_MESSAGE from '../constants/errorMessage.js';
import GAME_OPTION from '../constants/gameOption.js';

class InputValidator {
  static checkHasNoSpace(query) {
    const isValid = query.replace(' ', '').length === query.length;

    return isValid || this.throwError(ERROR_MESSAGE.HAS_SPACE);
  }

  static checkHasRightNameFormat(query) {
    const regex = /[^a-z]/g;
    const isValid = !regex.test(query);

    return isValid || this.throwError(ERROR_MESSAGE.HAS_WRONG_NAME_FORMAT);
  }

  static checkInteger(query) {
    const isValid = Number.isSafeInteger(Number(query));

    return isValid || this.throwError(ERROR_MESSAGE.NOT_INTEGER);
  }

  static checkPositiveInteger(query) {
    const isValid = Number(query) > 0;

    return isValid || this.throwError(ERROR_MESSAGE.NEGATIVE_INTEGER);
  }

  static checkUniqueName(query) {
    const isValid = new Set(query).size === query.length;

    return isValid || this.throwError(ERROR_MESSAGE.DUPLICATE_NAME);
  }

  static checkNameInRange(query) {
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
      this.checkHasNoSpace(carName);
      this.checkNameInRange(carName);
      this.checkHasRightNameFormat(carName);
    });

    this.checkUniqueName(carNames);

    return query;
  }

  static validateRoundNumber(query) {
    this.checkInteger(query);
    this.checkPositiveInteger(query);

    return query;
  }
}

export default InputValidator;
