import { ERROR_MESSAGE } from '../constants/message.js';

export const CAR_VALIDATE = /[^a-zA-Z0-9]+/g;
export const TURN_VALIDATE = /\D/g;

export const carsValidationLengthAndChar = (item) => {
  if (item.trim().length < 1 || item.trim().length > 5) throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
  if (CAR_VALIDATE.test(item.trim())) throw new Error(ERROR_MESSAGE.CAR_NAME_ONLY_ENGLISH_NUMBER);
  return true;
};
