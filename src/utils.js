import { MissionUtils } from '@woowacourse/mission-utils';
import {
  CAR_NAME_ERRORS,
  ERROR_EMPTY_INPUT,
  NUMBER_INPUT_ERRORS,
} from './constants.js';

export const generateRandomNumber = (min, max) => {
  return MissionUtils.Random.pickNumberInRange(min, max);
};

export const splitAndTrim = (inputString) => {
  if (inputString === '') {
    throw new Error(ERROR_EMPTY_INPUT);
  }
  const items = inputString.split(',');

  for (let i = 0; i < items.length; i++) {
    items[i] = items[i].trim();
  }

  return items;
};

export const validateCarNames = (carNameArray) => {
  const uniqueCarNames = Array.from(new Set(carNameArray));

  if (uniqueCarNames.length !== carNameArray.length) {
    throw new Error(CAR_NAME_ERRORS.DUPLICATE_NAME);
  }

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

  return true;
};
