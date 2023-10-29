import ERROR from '../constants/error.js';
import CustomError from '../errors/error.js';

const Validator = {
  isEmptyString(string) {
    return string === ERROR.errorCase.emptyString;
  },

  validateUserInput(name) {
    if (this.isEmptyString(name)) {
      throw CustomError.InputView(ERROR.message.emptyString);
    }
  },

  validateCarName(carName) {
    const names = carName.split(',');

    names.forEach((name) => this.validateUserInput(name));
  },
};

export default Validator;
