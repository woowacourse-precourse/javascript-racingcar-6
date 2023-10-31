import { ATTEMPT_ERROR_MESSAGE } from '../constants/message/error.js';
import InputError from './InputError.js';
import checkSpace from './common.js';

/**
 * 시도 횟수가 숫자인지 검증하는 함수
 * @param {string} inputAttemptCount 시도 횟수
 * @throws 시도 횟수가 숫자가 아니라면 에러를 던진다.
 */
function checkNumeric(inputAttemptCount) {
  for (let i = 0; i < inputAttemptCount.length; i += 1) {
    if (inputAttemptCount[i] < '0' || inputAttemptCount[i] > '9') {
      throw new InputError(ATTEMPT_ERROR_MESSAGE.NOT_NUMERIC);
    }
  }
}

/**
 * 1 이상의 정수인지 검증하는 함수
 * @param {string} inputAttemptCount 시도 횟수
 * @throws 시도 횟수가 1이상이 아니라면 에러를 던진다.
 */
function checkPositiveNumber(inputAttemptCount) {
  if (parseInt(inputAttemptCount, 10) < 1) {
    throw new InputError(ATTEMPT_ERROR_MESSAGE.NOT_POSITIVE);
  }
}

/**
 * 입력받은 시도 횟수를 검증하는 함수
 * @param {string} inputAttemptCount 시도 횟수
 */
function validateAttemptCount(inputAttemptCount) {
  checkSpace(inputAttemptCount);
  checkNumeric(inputAttemptCount);
  checkPositiveNumber(inputAttemptCount);
}

export default validateAttemptCount;
