import { ERROR_MESSAGE } from "../constants/messages.js";

const throwIfFalse = (boolean, errorMessage) => {
  if (!boolean) {
    throw new Error(errorMessage);
  }
};

const validateIsString = (value) => {
  throwIfFalse(typeof value === "string", ERROR_MESSAGE.notString);
};

const validateIsArray = (value) => {
  throwIfFalse(Array.isArray(value), ERROR_MESSAGE.notArray);
};

const validateLengthBelow = (value, maxLength) => {
  throwIfFalse(value.length < maxLength, ERROR_MESSAGE.overMaxLength(maxLength));
};

export { validateIsString, validateIsArray, validateLengthBelow };
