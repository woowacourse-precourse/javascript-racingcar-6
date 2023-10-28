import { MAX_NAME_LENGTH } from "./constants.js";
import { MESSAGES } from "./message.js";

function isInputEmpty(input) {
  if (!input) {
    throw new Error(MESSAGES.EMPTY_ERROR);
  }
}

function isNameWithinLimit(name) {
  if (name.length > MAX_NAME_LENGTH) {
    throw new Error(MESSAGES.MAX_NAME_LENGTH_ERROR);
  }
}

function isInputNumeric(input) {
  if (isNaN(input)) {
    throw new Error(MESSAGES.NOT_NUMBER_ERROR);
  }
}

function validatePlayerName(input) {
  isInputEmpty(input);
  isNameWithinLimit(input);
}

function validateAttemptCount(input) {
  isInputEmpty(input);
  isInputNumeric(input);
}

export { validatePlayerName, validateAttemptCount };
