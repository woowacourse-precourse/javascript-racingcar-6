import checkSpace from "./common-validator.js";

const ERROR_MESSAGE = Object.freeze({
  NOT_NUMERIC: "[ERROR] 시도 횟수는 숫자만 입력 가능합니다.",
  NOT_INTEGER_NUMBER: "[ERROR] 시도 횟수는 정수만 가능합니다.",
  NOT_POSITIVE: "[ERROR] 시도 횟수는 1이상의 정수만 가능합니다.",
});

/**
 * 시도 횟수가 숫자인지 검증하는 함수
 * @param {string} inputAttemptCount 시도 횟수
 * @throws 시도 횟수의 길이가 0이라면 에러를 던진다.
 */
function checkNumeric(inputAttemptCount) {
  if (isNaN(Number(inputAttemptCount))) {
    throw new Error(ERROR_MESSAGE.NOT_NUMERIC);
  }
}

/**
 * 시도 횟수가 정수인지 검증하는 함수
 * @param {string} inputAttemptCount 시도 횟수
 * @throws 시도 횟수가 정수가 아니라면 에러를 던진다.
 */
function checkIntegerNumber(inputAttemptCount) {
  if (inputAttemptCount.includes(".")) {
    throw new Error(ERROR_MESSAGE.NOT_INTEGER_NUMBER);
  }
}

/**
 * 1 이상의 정수인지 검증하는 함수
 * @param {string} inputAttemptCount 시도 횟수
 * @throws 시도 횟수가 1이상이 아니라면 에러를 던진다.
 */
function checkPositiveNumber(inputAttemptCount) {
  if (parseInt(inputAttemptCount) < 1) {
    throw new Error(ERROR_MESSAGE.NOT_POSITIVE);
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
