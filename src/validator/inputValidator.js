import ERROR_MESSAGE from '../constants/errorMessage.js';
import GAME_OPTION from '../constants/gameOption.js';

class InputValidator {
  static checkhasNoSpace(query) {
    const isValid = query.replace(' ', '').length === query.length;

    return isValid || this.throwError(ERROR_MESSAGE.hasSpace);
  }

  static checkhasWrongName(query) {
    const regex = /[^a-z]/g;
    const isValid = !regex.test(query);

    return isValid || this.throwError(ERROR_MESSAGE.hasWrongName);
  }

  static checkIsInteger(query) {
    const isValid = Number.isSafeInteger(Number(query));

    return isValid || this.throwError(ERROR_MESSAGE.isNotInteger);
  }

  static checkIsPositiveInteger(query) {
    const isValid = Number(query) > 0;

    return isValid || this.throwError(ERROR_MESSAGE.isNegativeInteger);
  }

  static checkhasDuplicateName(query) {
    const isValid = new Set(query).size === query.length;

    return isValid || this.throwError(ERROR_MESSAGE.hasDuplicateName);
  }

  static checkIsInNameLengthRange(query) {
    const isValid =
      query.length >= GAME_OPTION.minCarNameLength &&
      query.length <= GAME_OPTION.maxCarNameLength;

    return isValid || this.throwError(ERROR_MESSAGE.notInNameLengthRange);
  }

  static throwError(errorMessage) {
    throw new Error(`${ERROR_MESSAGE.prefix} ${errorMessage}`);
  }

  static validateCarNames(query) {
    const carNames = query.split(GAME_OPTION.inputSeparator);

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
