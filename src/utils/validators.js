import { errorMessage } from "../constants/messages.js";

const throwIfFalse = (boolean, errorMessage) => {
  if (!boolean) {
    throw new Error(errorMessage);
  }
};

const validateIsString = (value) => {
  throwIfFalse(typeof value === "string", errorMessage.NOT_STRING);
};

const validateIsArray = (value) => {
  throwIfFalse(Array.isArray(value), errorMessage.NOT_ARRAY);
};

const validateLengthBelow = (value, maxLength) => {
  throwIfFalse(value.length < maxLength, errorMessage.OVER_MAX_LENGTH(maxLength));
};

export { validateIsString, validateIsArray, validateLengthBelow };
