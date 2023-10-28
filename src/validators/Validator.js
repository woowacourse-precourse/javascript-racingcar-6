import ValidationError from '../../Error.js';
import { ERROR_MESSAGE, REGEXP } from '../constant.js';

class Validator {
  static nameValidate(names) {
    const splitWords = names.split(',');

    if (splitWords.length <= 1) {
      throw new ValidationError(ERROR_MESSAGE.wrong_answer);
    }

    if (splitWords.some((word) => !this.isEnOrKo(word))) {
      throw new ValidationError(ERROR_MESSAGE.only_text);
    }

    if (splitWords.some((word) => word.length > 5)) {
      throw new ValidationError(ERROR_MESSAGE.over_name_length);
    }
  }

  static isEnOrKo(string) {
    return REGEXP.only_en_ko.test(string);
  }
}
export default Validator;
