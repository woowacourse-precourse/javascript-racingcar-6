import { MESSAGE } from '../constants/message.js';

export const validateTryNumber = (tryNumberInput) => {
  const regex = /^\d+$/;
  if (!regex.test(tryNumberInput)) {
    throw new Error(MESSAGE.ERROR_TRY_NUMBER_INPUT_WRONG);
  }
};
