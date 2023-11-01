import {
  MINIMUM_NAME_NUMBER,
  NULL,
  NAME_LETTER_NUMBER_LIMIT,
} from './constant.js';

import { ERROR } from './message.js';

export function name(users) {
  if (users.length < MINIMUM_NAME_NUMBER) {
    throw new Error(ERROR.SHORTAGE_NAME_NUMBER);
  } else if (users.length !== new Set(users).size) {
    throw new Error(ERROR.DUPLICATE_NAME);
  }

  for (const user of users) {
    if (!user || user.trim() === NULL) {
      throw new Error(ERROR.SHORTAGE_NAME_LETTER_NUMBER);
    } else if (user.length > NAME_LETTER_NUMBER_LIMIT) {
      throw new Error(ERROR.EXCEEDING_NAME_LETTER_LIMIT);
    }
  }

  return true;
}

export function attemptNum(inputNum) {
  const regExp = new RegExp('^[1-9]\\d*$');
  if (!regExp.test(inputNum)) {
    throw new Error(ERROR.INPUT_ATTEMPT);
  }

  return true;
}
