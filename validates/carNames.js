import { MESSAGES } from '../constants/message.js';

export const validateUserInputEmpty = (userInput) => {
  const trimmedInput = userInput.trim();
  if (
    trimmedInput.length === 0 ||
    trimmedInput.startsWith(',') ||
    trimmedInput.endsWith(',')
  ) {
    throw new Error(MESSAGES.ERROR_USER_INPUT_EMPTY_INPUT_WRONG);
  }
};

export const validateCarNameLength = (carNames) => {
  if (carNames.some((name) => name.length > 5)) {
    throw new Error(MESSAGES.ERROR_CAR_NAME_LENGTH_INPUT_WRONG);
  }
};

export const validateCarNameDuplication = (carNames) => {
  const set = new Set(carNames);
  if (set.size !== carNames.length) {
    throw new Error(MESSAGES.ERROR_CAR_NAMES_DUPLICATION_INPUT_WRONG);
  }
};

export const validateCarNameCount = (carNames) => {
  if (carNames.length === 1) {
    throw new Error(MESSAGES.ERROR_CAR_NAME_COMMA_INPUT_WRONG);
  }
};
