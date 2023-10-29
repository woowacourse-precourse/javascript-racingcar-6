import CAR from '../constants/car.js';
import ERROR from '../constants/error.js';
import CustomError from '../errors/error.js';

const Validator = {
  isEmptyString(string) {
    return string === ERROR.errorCase.emptyString;
  },

  isValidCarNameLength(name) {
    return (
      name.length >= CAR.name.minLength && name.length <= CAR.name.maxLength
    );
  },

  validateUserInput(name) {
    if (this.isEmptyString(name)) {
      throw CustomError.InputView(ERROR.message.emptyString);
    }
  },

  validateCarName(carName) {
    const isvalidLength = this.isValidCarNameLength(carName);

    if (!isvalidLength) {
      throw CustomError.InputView(ERROR.message.invalidCarNameLength);
    }
  },
};

export default Validator;
