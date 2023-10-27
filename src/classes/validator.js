import { ERROR_MESSAGE } from '../constant/message';

class Validator {
  static emptyInput(names) {
    if (names.trim() === '') {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }
}

export default Validator;
