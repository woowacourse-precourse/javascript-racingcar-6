import { errorMessage } from "../messages/errorMessage.js";

export const checkEmptyValue = (carNameArray) => {
  if (carNameArray.includes("")) {
    throw new Error(errorMessage.EMPTY_VALUE);
  }
};

export const checkCarNameLength = (carNameArray) => {
  carNameArray.forEach((name) => {
    if (name.length > 5) {
      throw new Error(errorMessage.INVALID_CAR_NAME);
    }
  });
};
