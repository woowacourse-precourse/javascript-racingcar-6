import { ERROR_MESSAGE } from "../constants/errorMessages.js";

const errorMessage = (message, input) => `[ERROR] ${message} 입력값 : ${input}`;

class RacingCarNameError extends Error {
  constructor(input) {
    super(errorMessage(ERROR_MESSAGE.namesFormat, input));
  }
}

class DuplicatedError extends Error {
  constructor(input) {
    super(errorMessage(ERROR_MESSAGE.namesDuplicated, input));
  }
}

class RetryCountError extends Error {
  constructor(input) {
    super(errorMessage(ERROR_MESSAGE.retryCountFormat, input));
  }
}

export {
  RacingCarNameError,
  DuplicatedError,
  RetryCountError
};