import ERROR_MESSAGES from './errorMessages';

const MIN_LENGTH = 1;
const NAME_MAX_LENGTH = 5;
const MINIMUM_TO_MOVE = 4;
const utils = Object.freeze({
  isString(input) {
    if (typeof input !== 'string') {
      throw new Error(ERROR_MESSAGES.stringType);
    }
  },
  isNumber(input) {
    if (typeof input !== 'number') {
      throw new Error(ERROR_MESSAGES.numberType);
    }
  },
  isArray(input) {
    if (Array.isArray(input) === false) {
      throw new Error(ERROR_MESSAGES.arrayType);
    }
  },
  checkMinLength(input) {
    if (input.length < MIN_LENGTH) {
      throw new Error(ERROR_MESSAGES.stringMinLength);
    }
  },
  checkMaxLength(input) {
    if (input.length > NAME_MAX_LENGTH) {
      throw new Error(ERROR_MESSAGES.nameMaxLength);
    }
  },
});

export { utils, MINIMUM_TO_MOVE };
