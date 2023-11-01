import { ERROR_MSG } from "./message";

export const validCarNames = (cars, carNames) => {
  if (cars === "") {
    throw new Error(ERROR_MSG.NO_INPUT);
  }
  if (new Set(carNames).size !== carNames.length) {
    throw new Error(ERROR_MSG.CAR_NAME_IS_DUPLICATION);
  }
  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length > 5) {
      throw new Error(ERROR_MSG.CAR_NAME_OVER_LENGTH);
    }
    if (carNames[i] === "") {
      throw new Error(ERROR_MSG.NO_CAR_NAME);
    }
  }
};

export const validTryTimes = (tryTimes) => {
  if (tryTimes === "") {
    throw new Error(ERROR_MSG.NO_INPUT);
  }
  if (isNaN(tryTimes)) {
    throw new Error(ERROR_MSG.TRY_TIMES_NUMBER);
  }
};
