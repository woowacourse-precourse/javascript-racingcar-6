import { ERROR_MESSAGE } from "../constants/errorMessages.js";

const errorMessage = (message) => `[ERROR] ${message}`;

export class RacingCarNameError extends Error {
  constructor() {
    super(errorMessage(ERROR_MESSAGE.namesFormat));
  }
}

export class RetryCountError extends Error {
  constructor() {
    super(errorMessage(ERROR_MESSAGE.retryCountFormat));
  }
}