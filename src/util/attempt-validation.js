const ERROR_MESSAGE = Object.freeze({
  NOT_NUMBER: "[ERROR] 시도 횟수는 숫자만 입력 가능합니다.",
  FLOAT_ERROR: "[ERROR] 시도 횟수는 정수만 가능합니다.",
  POSITIVE: "[ERROR] 시도 횟수는 1이상의 정수만 가능합니다.",
});

/**
 * 시도 횟수가 숫자인지 검증하는 함수
 * @param {string} inputAttemptCount 시도 횟수
 * @throws 시도 횟수의 길이가 0이라면 에러를 던진다.
 * @returns
 */
function isNumeric(inputAttemptCount) {
  if (isNaN(Number(inputAttemptCount))) {
    throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  }

  return;
}

/**
 * 시도 횟수가 정수인지 검증하는 함수
 * @param {string} inputAttemptCount 시도 횟수
 * @throws 시도 횟수가 정수가 아니라면 에러를 던진다.
 * @returns
 */
function isFloatError(inputAttemptCount) {
  if (inputAttemptCount.includes(".")) {
    throw new Error(ERROR_MESSAGE.FLOAT_ERROR);
  }
}

/**
 * 1 이상의 정수인지 검증하는 함수
 * @param {string} inputAttemptCount 시도 횟수
 * @throws 시도 횟수가 1이상이 아니라면 에러를 던진다.
 * @returns
 */
function isPositiveIntegerError(inputAttemptCount) {
  if (parseInt(inputAttemptCount) < 1) {
    throw new Error(ERROR_MESSAGE.POSITIVE);
  }

  return;
}

/**
 * 입력받은 시도 횟수를 검증하는 함수
 * @param {string} inputAttemptCount 입력받은 검증 횟수
 * @returns {integer} 정수 형태의 검증 횟수
 */
function validateAttemptCount(inputAttemptCount) {
  isNumeric(inputAttemptCount);
  isFloatError(inputAttemptCount);
  isPositiveIntegerError(inputAttemptCount);

  return parseInt(inputAttemptCount);
}

export default validateAttemptCount;
