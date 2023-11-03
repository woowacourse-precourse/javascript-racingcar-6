import ValidationError from '../errors/ValidationError.js';
import {
  ERROR_MESSAGE,
  EXCUTION_NUMBER,
  INPUT_DIVIDER,
  NAME_MAX_LENGTH,
  REGEXP,
} from '../constant.js';

class Validator {
  static nameValidate(names) {
    const splitWords = names.split(INPUT_DIVIDER);

    if (splitWords.length <= 1) {
      throw new ValidationError(ERROR_MESSAGE.wrong_answer);
    }

    if (splitWords.some((word) => !this.isEnOrKo(word))) {
      throw new ValidationError(ERROR_MESSAGE.only_text);
    }

    if (splitWords.some((word) => word.length > NAME_MAX_LENGTH)) {
      throw new ValidationError(ERROR_MESSAGE.over_name_length);
    }
  }

  static executionNumberValidate(number) {
    if (!REGEXP.only_number.test(number)) {
      throw new ValidationError(ERROR_MESSAGE.only_number);
    }

    if (Number(number) < EXCUTION_NUMBER.min || Number(number) > EXCUTION_NUMBER.max) {
      throw new ValidationError(ERROR_MESSAGE.invalid_number_of_time);
    }
  }

  static isEnOrKo(string) {
    return REGEXP.only_en_ko.test(string);
  }
}
export default Validator;
