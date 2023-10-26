import {
  EMPTY_INPUT,
  NOT_NUMBER,
  NOT_CAR_NAME,
  OUT_OF_RANGE,
  NUMBER_REGEX,
  CAR_NAME_REGEX,
} from "../constants/Constants.js";

const isEmpty = (input) => {
  if (input.length === 0) {
    throw new Error(EMPTY_INPUT);
  }
};

const isValidCarName = (input) => {
  input.forEach((car) => {
    if (!CAR_NAME_REGEX.test(car)) {
      throw new Error(NOT_CAR_NAME);
    }
  });
};

const isValidLength = (input) => {
  input.forEach((car) => {
    if (car.length > 5) {
      throw new Error(OUT_OF_RANGE);
    }
  });
};

const isValidNumber = (input) => {
  input.forEach((car) => {
    if (!NUMBER_REGEX.test(car)) {
      throw new Error(NOT_NUMBER);
    }
  });
};

const InputValidator = (input) => {
  isEmpty(input);
  isValidCarName(input);
  isValidLength(input);
};

export default InputValidator;
