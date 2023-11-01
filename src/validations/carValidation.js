import { ERROR_CAR_MESSAGE } from "../constants/errorMessage.js";

const carValidation = (carName) => {
  if (carName.some((name) => name.length > 5)) {
    throw new Error(ERROR_CAR_MESSAGE.INVALID_INPUT_CAR_NAME_OVER_ERROR);
  }

  if (carName.some((name) => name.length === 0)) {
    throw new Error(ERROR_CAR_MESSAGE.INVALID_INPUT_CAR_NAME_EMPTY_ERROR);
  }

  if (carName.some((name) => !/^[a-zA-Z]+$/.test(name))) {
    throw new Error(ERROR_CAR_MESSAGE.INVALID_INPUT_CAR_NAME_ENG_ERROR);
  }

  const uniqueNames = new Set(carName);
  if (uniqueNames.size !== carName.length) {
    throw new Error(ERROR_CAR_MESSAGE.INVALID_INPUT_CAR_NAME_DUPLICATION_ERROR);
  }
};

export { carValidation };
