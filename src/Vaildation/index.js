import { ERROR } from "../Constants/error.js";
export const validateCarNameLength = (cars, i) => {
  if (cars[i].length > 5) throw new Error(ERROR.LENGTH);
};

export const validateCarNameInput = (cars, i) => {
  const regex = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
  if (regex.test(cars[i])) throw new Error(ERROR.INPUT);
};

export const validateNoWhiteSpace = (input) => {
  if (input?.trim() === "") throw new Error(ERROR.WHITESPACE);

  return input;
};

export const validateNumberType = (input) => {
  const regex = /^\d+$/;

  if (!regex.test(input)) throw new Error(ERROR.NUMBER_TYPE);
};

export const validateNumberLength = (input) => {
  if (input.length > 2) throw new Error(ERROR.NUMBER_LENGTH);
};

export const validateDuplicate = (input) => {
  if (new Set(input).size !== input?.length) throw new Error(ERROR.DUPLICATE);
};
