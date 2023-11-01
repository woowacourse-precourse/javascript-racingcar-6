import { ERROR_MESSAGE } from "./Message.js";

const isUnderTwo = (carNames) => {
  return carNames.length < 2;
};

const isLogngName = (carNames) => {
  return carNames.some((carName) => carName.length > 5);
};

const isDuplicate = (carNames) => {
  return new Set(carNames).size !== carNames.length;
};

export const validateCarNames = (carNames) => {
  if (isUnderTwo(carNames)) {
    throw new Error(ERROR_MESSAGE.DISABLE_RACE);
  }
  if (isLogngName(carNames)) {
    throw new Error(ERROR_MESSAGE.LONG_CARNAME);
  }
  if (isDuplicate(carNames)) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_CARNAME);
  }
  return carNames;
};

export const validateRound = (round) => {
  if (round < 1) {
    throw new Error(ERROR_MESSAGE.INVALID_ROUND);
  }
  return round;
};
