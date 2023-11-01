const { ERROR_MESSAGE } = require("../constants/message.js");

class InputError {
  validateInputExist(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGE.INPUT_EXIST_ERROR);
    }
  }

  validateCarNameLength(input) {
    input.map((value) => {
      if ([...value.split("")].length > 5) {
        throw new Error(ERROR_MESSAGE.INPUT_CAR_NAME_LENGTH_ERROR);
      }
    });
  }

  validateCountInputLength(input) {
    if (input.length !== 1) {
      throw new Error(ERROR_MESSAGE.INPUT_COUNT_LENGTH_ERROR);
    }
  }

  validateInputDataType(input) {
    if (isNaN(Number(input))) {
      throw new Error(ERROR_MESSAGE.INPUT_DATA_TYPE_ERROR);
    }
  }

  validateIsPositiveNumber(input) {
    if (Number(input) < 0) {
      throw new Error(ERROR_MESSAGE.POSITIVE_NUMBER_ERROR);
    }
  }

  validateCarInput(input) {
    this.validateInputExist(input);
    this.validateCarNameLength(input);
  }

  validateCountInput(input) {
    this.validateInputExist(input);
    this.validateCountInputLength(input);
    this.validateInputDataType(input);
    this.validateIsPositiveNumber(input);
  }
}

module.exports = InputError;
