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

const validateLengthBelow = (value, exclusiveMax) => {
  throwIfFalse(value.length < exclusiveMax, ERROR_MESSAGE.overMaxLength(exclusiveMax));
};

const validateLengthAbove = (value, exclusiveMin) => {
  throwIfFalse(value.length > exclusiveMin, ERROR_MESSAGE.underMinLength(exclusiveMin));
};

export { typeValidator, validateLengthBelow, validateLengthAbove };
