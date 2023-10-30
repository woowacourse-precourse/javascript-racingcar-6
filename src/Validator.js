const NAEMS_ERROR_CODE = [
  'EMPTY_NAME',
  'WRONG_RANGE_NAME',
  'INCLUDE_SPECIAL_CHARATER',
  'NOT_INCLUDE_COMMA',
];

const TRYING_ERROR_CODE = [
  'UNDER_ZERO',
  'NOT_NUMBER',
];

class Validator {
  static evaluateCarNames(carNames) {
    const splitedNames = carNames.split(',');
    splitedNames.forEach((name) => {
      if (name.length === 0) {
        throw NAEMS_ERROR_CODE[0];
      } else if (name.length > 5) {
        throw NAEMS_ERROR_CODE[1];
      } else if (!Validator.checkCharacterOnlyInclude(name)) {
        throw NAEMS_ERROR_CODE[2];
      }
    });
    return splitedNames;
  }

  static checkCharacterOnlyInclude(name) {
    const regex = /^[\p{L}]{1,5}$/u;
    return regex.test(name);
  }

  static evaluateTryinCount(tryingCount) {
    if (tryingCount < 0) {
      throw TRYING_ERROR_CODE[0];
    } else if (!Number.isInteger(Number(tryingCount))) {
      throw TRYING_ERROR_CODE[1];
    }
  }
}

export default Validator;
