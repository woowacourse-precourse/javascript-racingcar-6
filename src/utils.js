import { MissionUtils } from '@woowacourse/mission-utils';
import { CAR_NAME_ERRORS, NUMBER_INPUT_ERRORS } from './constants';

export const generateRandomNumber = (min, max) => {
  return MissionUtils.Random.pickNumberInRange(min, max);
};

export const removeSpaces = (carNames) => {
  const carNameArray = carNames.split(',');

  for (let i = 0; i < carNameArray.length; i++) {
    const trimmedName = carNameArray[i].trim();

    carNameArray[i] = trimmedName;
  }

  return carNameArray;
};

export const validateCarNames = (carNameArray) => {
  if (carNameArray.length === 1) {
    throw new Error(CAR_NAME_ERRORS.MIN_COUNT);
  }

  for (const name of carNameArray) {
    if (name.length === 0) {
      throw new Error(CAR_NAME_ERRORS.EMPTY_STRING);
    }

    if (name.length > 5) {
      throw new Error(CAR_NAME_ERRORS.MAX_LENGTH);
    }
  }

  return true;
};

export const validateNumberInput = (input) => {
  if (isNaN(input)) {
    throw new Error(NUMBER_INPUT_ERRORS.NOT_A_NUMBER);
  }

  if (parseInt(input) === 0) {
    throw new Error(NUMBER_INPUT_ERRORS.ZERO_TRIES);
  }

  if (parseInt(input) < 0) {
    throw new Error(NUMBER_INPUT_ERRORS.NEGATIVE_TRIES);
  }

  if (!Number.isInteger(Number(input))) {
    throw new Error(NUMBER_INPUT_ERRORS.NOT_AN_INTEGER);
  }

  if (input === '') {
    throw new Error(NUMBER_INPUT_ERRORS.EMPTY_STRING);
  }

  return true;
};
