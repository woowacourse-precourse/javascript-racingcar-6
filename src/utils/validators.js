import { ERROR_MESSAGE } from "../constants/messages.js";

const throwIfFalse = (boolean, errorMessage) => {
  if (!boolean) {
    throw new Error(errorMessage);
  }
};

const typeValidator = {
  isString(value) {
    throwIfFalse(typeof value === "string", ERROR_MESSAGE.notString);
  },

  isNumber(value) {
    throwIfFalse(typeof value === "number" && !Number.isNaN(value), ERROR_MESSAGE.notNumber);
  },

  isArray(value) {
    throwIfFalse(Array.isArray(value), ERROR_MESSAGE.notArray);
  },
};

const validateLengthBelow = (value, maxLength) => {
  throwIfFalse(value.length < maxLength, ERROR_MESSAGE.overMaxLength(maxLength));
};

export { typeValidator, validateLengthBelow };
