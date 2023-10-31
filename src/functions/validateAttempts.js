import { MAX_VALUE_OF_ATTEMPTS } from '../constants/attemptsConstants.js';
import { ERROR_ATTEMPTS } from '../constants/messagesConstants.js';

function isNaturalNumber(number) {
  const pattern = /^[1-9]\d*$/; // 1~9로 시작하는 정수 문자열
  return pattern.test(number);
}

function isTooBig(number) {
  return number > MAX_VALUE_OF_ATTEMPTS;
}

export default function validateAttempts(attempts) {
  if (!isNaturalNumber(attempts)) {
    throw new Error(ERROR_ATTEMPTS);
  }

  if (isTooBig(attempts)) {
    throw new Error(ERROR_ATTEMPTS);
  }
}
