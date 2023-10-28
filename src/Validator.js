const ERROR_CODE = [
  'EMPTY_NAME',
  'WRONG_RANGE_NAME',
  'INCLUDE_SPECIAL_CHARATER',
  'NOT_INCLUDE_COMMA',
];

class Validator {
  static evaluateCarNames(carNames) {
    carNames.forEach((name) => {
      if (name.length === 0) {
        throw ERROR_CODE[0];
      } else if (name.length > 5) {
        throw ERROR_CODE[1];
      } else if (!Validator.checkCharacterOnlyInclude(name)) {
        throw ERROR_CODE[2];
      }
    });
  }

  static checkCharacterOnlyInclude(name) {
    const regex = /^[\p{L}]{1,5}$/u;
    console.log(regex.test(name));
    return regex.test(name);
  }
}

export default Validator;
