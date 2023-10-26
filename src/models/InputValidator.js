import { ERROR_MESSAGES, CAR_NAME_REGEX, NUMBER_REGEX } from "../constants/Constants.js";

const isEmpty = (input) => {
  if (input.length === 0) {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

const isDuplicateName = (input) => {
  const setInput = new Set(input);
  if (setInput.size !== input.length) {
    throw new Error(ERROR_MESSAGES.DUPLICATION_INPUT);
  }
};

const isValidCarName = (input) => {
  input.forEach((car) => {
    if (!CAR_NAME_REGEX.test(car)) {
      throw new Error(ERROR_MESSAGES.NOT_CAR_NAME);
    }
  });
};

const isValidLength = (input) => {
  input.forEach((car) => {
    if (car.length > 5) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
    }
  });
};

const isValidNumber = (input) => {
  if (!NUMBER_REGEX.test(input)) {
    throw new Error(ERROR_MESSAGES.NOT_NUMBER);
  }
};

const InputValidator = (input) => {
  if (typeof input === "number") {
    isEmpty(input);
    isValidNumber(input);
  }
  if (Array.isArray(input)) {
    isEmpty(input);
    isDuplicateName(input);
    isValidCarName(input);
    isValidLength(input);
  }
};

export default InputValidator;
