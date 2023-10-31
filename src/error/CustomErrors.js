import { ERROR_MESSAGE } from "../constants/errorMessages.js";

const errorMessage = (message, input) => `[ERROR] ${message} 입력값 : ${input}`;

export class RacingCarNameError extends Error {
  constructor(input) {
    super(errorMessage(ERROR_MESSAGE.namesFormat, input));
  }
}

export class DuplicatedError extends Error {
  constructor(input) {
    super(errorMessage(ERROR_MESSAGE.namesDuplicated, input));
  }
}

export class RetryCountError extends Error {
  constructor(input) {
    super(errorMessage(ERROR_MESSAGE.retryCountFormat, input));
  }
}
