import ERROR_MESSAGES from '../constants/ErrorMessages.js';

export default function validateTryCount(tryCountInput) {
  if (Number.isNaN(tryCountInput)) {
    throw new Error(ERROR_MESSAGES.invalidCountType);
  }
  if (tryCountInput < 1) {
    throw new Error(ERROR_MESSAGES.invalidCountValue);
  }
}
