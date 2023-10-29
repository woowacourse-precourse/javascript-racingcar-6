import { ATTEMPT_ERROR_MESSAGE } from "../constants/error-message.js";
import InputError from "./InputError.js";
import checkSpace from "./common-validator.js";

/**
 * 시도 횟수가 숫자인지 검증하는 함수
 * @param {string} inputAttemptCount 시도 횟수
 * @throws 시도 횟수의 길이가 0이라면 에러를 던진다.
 */
function checkNumeric(inputAttemptCount) {
  if (isNaN(Number(inputAttemptCount))) {
    throw new InputError(ATTEMPT_ERROR_MESSAGE.NOT_NUMERIC);
  }
}

/**
 * 시도 횟수가 정수인지 검증하는 함수
 * @param {string} inputAttemptCount 시도 횟수
 * @throws 시도 횟수가 정수가 아니라면 에러를 던진다.
 */
function checkIntegerNumber(inputAttemptCount) {
  if (inputAttemptCount.includes(".")) {
    throw new InputError(ATTEMPT_ERROR_MESSAGE.NOT_INTEGER_NUMBER);
  }
}

/**
 * 1 이상의 정수인지 검증하는 함수
 * @param {string} inputAttemptCount 시도 횟수
 * @throws 시도 횟수가 1이상이 아니라면 에러를 던진다.
 */
function checkPositiveNumber(inputAttemptCount) {
  if (parseInt(inputAttemptCount) < 1) {
    throw new InputError(ATTEMPT_ERROR_MESSAGE.NOT_POSITIVE);
  }
}

/**
 * 입력받은 시도 횟수를 검증하는 함수
 * @param {string} inputAttemptCount 입력받은 검증 횟수
 */
function validateAttemptCount(inputAttemptCount) {
  checkSpace(inputAttemptCount);
  checkNumeric(inputAttemptCount);
  checkPositiveNumber(inputAttemptCount);
  checkIntegerNumber(inputAttemptCount);
}

export default validateAttemptCount;
