import { ERROR_USER_INPUT_MESSAGE } from "../constants/errorMessage.js";

const numberValidation = (inputCount) => {
  if (inputCount === "") {
    throw new Error(
      ERROR_USER_INPUT_MESSAGE.INVALID_INPUT_USER_INPUT_EMPTY_ERROR
    );
  }
  const convertedNumber = Number(inputCount);

  if (Number.isNaN(convertedNumber)) {
    throw new Error(
      ERROR_USER_INPUT_MESSAGE.INVALID_INPUT_USER_INPUT_NUMBER_ERROR
    );
  }

  if (!Number.isInteger(convertedNumber)) {
    throw new Error(
      ERROR_USER_INPUT_MESSAGE.INVALID_INPUT_USER_INPUT_NUMBER_ERROR
    );
  }

  if (convertedNumber < 1) {
    throw new Error(
      ERROR_USER_INPUT_MESSAGE.INVALID_INPUT_USER_INPUT_ZERO_ERROR
    );
  }

  return convertedNumber;
};

export { numberValidation };
