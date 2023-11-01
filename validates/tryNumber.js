import { MESSAGES } from '../constants/message.js';

export const validateTryNumberRange = (tryNumberInput) => {
  const tryNumber = parseInt(tryNumberInput);
  if (tryNumber < 1) {
    throw new Error(MESSAGES.ERROR_TRY_NUMBER_INPUT_LESS_THAN_ONE);
  }
};

export const validateTryNumberFormat = (tryNumberInput) => {
  const regex = /^\d+$/;
  if (!regex.test(tryNumberInput)) {
    throw new Error(MESSAGES.ERROR_TRY_NUMBER_INPUT_WRONG);
  }
};
