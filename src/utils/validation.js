import { SETTING, ERROR_MESSAGE } from '../constants';

export const getValidInputNames = (input) => {
  const splittedInput = input.split(',').map(name => name.trim());

  const set = new Set(splittedInput);
  const { MIN_NAME_NUMBER, MIN_NAME_LENGTH, MAX_NAME_LENGTH } = SETTING;
  const { NOT_MULTIPLE_NAMES, NOT_NAME_LENGTH, NOT_UNIQUE } = ERROR_MESSAGE;
  
  if (splittedInput.length < MIN_NAME_NUMBER) {
    throw new Error(`${NOT_MULTIPLE_NAMES}`);
  } 

  if (splittedInput
      .filter(name => name.length < MIN_NAME_LENGTH || name.length > MAX_NAME_LENGTH)
      .length > 0) {
    throw new Error(`${NOT_NAME_LENGTH}`);
  }

  if (set.size !== splittedInput.length) {
    throw new Error(`${NOT_UNIQUE}`);
  }

  return splittedInput;
}

export const getValidInputNumber = (input) => {
  input = Number(input.trim());
  const { MIN_INPUT_NUMBER } = SETTING;
  const { NOT_NUMBER, NOT_RANGE, NOT_NATURAL_NUMBER, NOT_SAFE_INTEGER } = ERROR_MESSAGE;

  if (isNaN(input)) {
    throw new Error(`${NOT_NUMBER}`);
  }

  if (input < MIN_INPUT_NUMBER) {
    throw new Error(`${NOT_RANGE}`);
  }

  if (input % 1 !== 0) {
    throw new Error(`${NOT_NATURAL_NUMBER}`);
  }

  if (input > Number.MAX_SAFE_INTEGER) {
    throw new Error(`${NOT_SAFE_INTEGER}`);
  }

  return input;
}