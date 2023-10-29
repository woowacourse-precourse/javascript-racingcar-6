import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from '../constants/constants.js';
import { ERROR_NAME_LENGTH } from '../constants/messages.js';

function isLengthInvalid(name) {
  return name.length < MIN_NAME_LENGTH || name.length > MAX_NAME_LENGTH;
}

export function validateName(names) {
  names.forEach((name) => {
    if (isLengthInvalid(name)) {
      throw new Error(ERROR_NAME_LENGTH);
    }
  });
}
