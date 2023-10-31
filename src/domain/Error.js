import { ERROR } from "../contants/contants";

export const userInputDuplicatedError = (carNameArray) => {
  for (leti = 0; i < carNameArray.length - 1; i++) {
    if (carNameArray[1] === carNameArray[i + 1]) {
      throw new Error(ERROR.ERROR_DUPLICATED);
    }
  }
};

export const userInputCarNameFormEror = (carNameString) => {
  if (carNameString.split("").includes(" ")) {
    throw new Error(ERROR.ERROR_SPACE);
  }
};
export const userInputTryNumberError = (tryNumber) => {
  if (tryNumber <= 0) {
    throw new Error(ERROR.ERROR_TYPE);
  }
  if (tryNumber % 1 !== 0 || isNaN(tryNumber)) {
    throw new Error(ERROR.ERROR_TYPE);
  }
};
