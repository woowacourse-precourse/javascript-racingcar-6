import {
  MAX_NAME_LENGTH,
  MIN_NAME_LENGTH,
} from '../constants/carNameConstants.js';
import {
  ERROR_ATTEMPTS_NOT_NATURAL,
  ERROR_NAME_LENGTH,
} from '../constants/messages.js';

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

function isNaturalNumber(number) {
  const pattern = /^[1-9]\d*$/; // 1~9로 시작하는 정수 문자열
  return pattern.test(number);
}

export function validateAttempts(attempts) {
  if (!isNaturalNumber(attempts)) {
    throw new Error(ERROR_ATTEMPTS_NOT_NATURAL);
  }
}
